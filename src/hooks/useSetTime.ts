import { useEffect, useState } from "react";

const useSetTime = (): [
  number,
  string,
  number,
  string,
  number,
  string,
  string | undefined
] => {
  const [date, setDate] = useState(new Date());
  const weekArr = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ];
  const monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const setImage = (hour: number) => {
    if (hour >= 0 && hour < 6)
      return `${process.env.PUBLIC_URL}/asset/night.png`;
    if (hour >= 6 && hour < 12)
      return `${process.env.PUBLIC_URL}/asset/morning.png`;
    if (hour >= 12 && hour < 18)
      return `${process.env.PUBLIC_URL}/asset/noon.png`;
    if (hour >= 18 && hour < 24)
      return `${process.env.PUBLIC_URL}/asset/evening.png`;
  };

  const year = date.getFullYear();
  const month = monthArr[date.getMonth()];
  const day = date.getDate();
  const week = weekArr[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const timeImg = setImage(hour);
  return [year, month, day, week, hour, minute, timeImg];
};

export default useSetTime;
