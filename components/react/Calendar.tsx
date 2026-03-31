import React, { useState } from "react";

interface CalendarProps {
  selectedDate?: string;
  showToday?: boolean;
  onChange?: (date: string) => void;
  className?: string;
}

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/**
 * Calendar from Figma node 463:16484
 *
 * Anatomy:
 *   1. Month selection menu (bold 12px label + chevron-down)
 *   2. Year selection menu (bold 12px label + chevron-down)
 *   3. Month pagination (chevron-left / chevron-right icon buttons)
 *   4. Day headers: MON–SUN, uppercase, Regular 12px/20px, grey #595959, centered in 40px cells
 *   5. Date cells: 40×40px circles (rounded-[20px]), Regular 14px/20px
 *   6. "Today" link: Regular 12px/16px, blue #4573D2, centered, optional
 *
 * Date states:
 *   - Normal: no bg, text #1C1C1C
 *   - Hover: bg #EBEBEB (circle), text #1C1C1C
 *   - Active (selected): no bg, text #4573D2
 *   - Active + Hover: bg #EBEBEB, text #4573D2
 *   - Disabled (outside month): opacity 50%
 *
 * Container: white bg, rounded-[4px], elevation shadow (no border)
 * Padding: 16px
 * Grid width: 7 × 40px = 280px
 */

export function Calendar({ selectedDate, showToday = true, onChange, className = "" }: CalendarProps) {
  const today = new Date();
  const selected = selectedDate ? new Date(selectedDate) : null;

  const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  // Previous month trailing days
  const prevMonthDays = getDaysInMonth(
    viewMonth === 0 ? viewYear - 1 : viewYear,
    viewMonth === 0 ? 11 : viewMonth - 1
  );

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else { setViewMonth(viewMonth - 1); }
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else { setViewMonth(viewMonth + 1); }
  };
  const goToToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    onChange?.(formatDate(today.getFullYear(), today.getMonth(), today.getDate()));
  };

  // Build grid: leading disabled, current month, trailing disabled
  type Cell = { day: number; disabled: boolean };
  const cells: Cell[] = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevMonthDays - i, disabled: true });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, disabled: false });
  const trailing = 7 - (cells.length % 7);
  if (trailing < 7) {
    for (let d = 1; d <= trailing; d++) cells.push({ day: d, disabled: true });
  }

  const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div
      className={[
        "inline-flex flex-col items-center justify-center",
        "p-[16px]",
        "bg-white rounded-[4px]",
        "shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_2px_6px_rgba(0,0,0,0.15)]",
        "font-['Helvetica',Arial,sans-serif] antialiased",
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* Period selection header */}
      <div className="flex items-center justify-between w-[280px]">
        {/* Left: Month + Year selectors */}
        <div className="flex items-center">
          <div className="flex items-center h-[32px] cursor-pointer">
            <span className="text-[12px] leading-[16px] font-bold text-[#1C1C1C] pl-[8px]">
              {MONTHS[viewMonth]}
            </span>
            <svg className="w-[24px] h-[24px] text-[#1C1C1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7.5 10l4.5 4 4.5-4" />
            </svg>
          </div>
          <div className="flex items-center h-[32px] cursor-pointer">
            <span className="text-[12px] leading-[16px] font-bold text-[#1C1C1C] pl-[8px]">
              {viewYear}
            </span>
            <svg className="w-[24px] h-[24px] text-[#1C1C1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7.5 10l4.5 4 4.5-4" />
            </svg>
          </div>
        </div>
        {/* Right: Prev/Next month buttons */}
        <div className="flex items-center gap-[4px]">
          <button
            onClick={prevMonth}
            className="inline-flex items-center justify-center p-[6px] rounded-[4px] cursor-pointer outline-none overflow-clip hover:bg-[#EBEBEB]"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5l-5 5 5 5" />
            </svg>
          </button>
          <button
            onClick={nextMonth}
            className="inline-flex items-center justify-center p-[6px] rounded-[4px] cursor-pointer outline-none overflow-clip hover:bg-[#EBEBEB]"
            aria-label="Next month"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 5l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 pt-[8px]">
        {DAYS.map((d) => (
          <div
            key={d}
            className="w-[40px] flex items-center justify-center px-[8px] py-[6px] text-[12px] leading-[20px] font-normal text-[#595959] uppercase"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const dateStr = cell.disabled ? "" : formatDate(viewYear, viewMonth, cell.day);
          const isSelected = !cell.disabled && dateStr === selectedDate;
          const isToday = !cell.disabled && dateStr === todayStr;

          return (
            <button
              key={i}
              onClick={() => !cell.disabled && onChange?.(dateStr)}
              disabled={cell.disabled}
              className={[
                "w-[40px] h-[40px] flex items-center justify-center",
                "text-[14px] leading-[20px] font-normal rounded-[20px] outline-none",
                cell.disabled
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer hover:bg-[#EBEBEB]",
                isSelected || isToday
                  ? "text-[#4573D2]"
                  : "text-[#1C1C1C]",
              ].filter(Boolean).join(" ")}
            >
              {cell.day}
            </button>
          );
        })}
      </div>

      {/* Today link */}
      {showToday && (
        <div className="flex items-end justify-center pt-[8px] w-full">
          <button
            onClick={goToToday}
            className="text-[12px] leading-[16px] font-normal text-[#4573D2] hover:text-[#75A0F5] cursor-pointer outline-none bg-transparent border-none"
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
}
