import Calendar from "@components/common/calendar/Calendar";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";

const dayOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarContainer: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const dateTotalCount = selectedDate.daysInMonth();
  const [renderDate, setRenderDate] = useState<number[]>([]);

  const prevClickHandler = useCallback(() => {
    const newDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(newDate);
  }, [selectedDate]);

  const nextClickHandler = useCallback(() => {
    const newDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(newDate);
  }, [selectedDate]);

  const returnDate = () => {
    let dayArr = [];

    for (const nowDay of dayOfWeek) {
      const day = selectedDate.day();
      if (dayOfWeek[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(i + 1);
        }
      } else {
        dayArr.push(-1);
      }
    }
    setRenderDate(dayArr);
  };

  const onClickDateHandler = (date: number) => {
    // TODO
  };

  return (
    <Calendar
      selectedDate={selectedDate}
      titleDate={selectedDate.format("dddd YYYY")}
      dayOfWeek={dayOfWeek}
      prevClick={prevClickHandler}
      nextClick={nextClickHandler}
      renderDate={renderDate}
      onClickDateHandler={onClickDateHandler}
    />
  );
};

export default CalendarContainer;
