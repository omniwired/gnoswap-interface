import { cx } from "@emotion/css";
import { Dayjs } from "dayjs";
import React from "react";
import IconStrokeArrowLeft from "../icons/IconStrokeArrowLeft";
import IconStrokeArrowRight from "../icons/IconStrokeArrowRight";
import { wrapper } from "./Calendar.styles";

interface CalendarProps {
  selectedDate: Dayjs;
  titleDate: string;
  dayOfWeek: string[];
  prevClick: () => void;
  nextClick: () => void;
  renderDate: number[];
  onClickDateHandler: (date: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  titleDate,
  dayOfWeek,
  prevClick,
  nextClick,
  renderDate,
  onClickDateHandler,
}) => {
  return (
    <div css={wrapper}>
      <div className="calendar-info">
        <button className="arrow-button" onClick={prevClick}>
          <IconStrokeArrowLeft />
        </button>
        <h4 className="title-date">{titleDate}</h4>
        <button className="arrow-button" onClick={nextClick}>
          <IconStrokeArrowRight />
        </button>
      </div>

      <div className="date-wrap date-head">
        {dayOfWeek.map((v, i) => (
          <span key={i}>{v}</span>
        ))}
      </div>

      <div className="date-wrap date-body">
        {renderDate.map((v, i) => (
          <span
            key={i}
            className={cx({ selected: selectedDate.date() === v })}
            onClick={() => onClickDateHandler(v)}
          >
            {v !== -1 && v}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
