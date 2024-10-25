import { useEffect, useState } from "react";

const DataCalculation = () => {
  const [days, setDays] = useState("");
  const [seconds, setSeconds] = useState("");
  const [years, setYears] = useState("");

  const StartingYear = new Date(2023, 9, 1); // October 1, 2023

  // Format large numbers
  const formatLength = (value) => {
    if (value >= 1000000000000) {
      return `${(value / 1000000000000).toFixed(2)} trillion `;
    }
    if (value >= 100000000) {
      return `${(value / 1000000000).toFixed(2)} billion `;
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)} million `;
    }
    return `${value} `;
  };

  useEffect(() => {
    const Interval = setInterval(() => {
      const CurrentYear = new Date();

      // Getting the difference in milliseconds
      const Diff_Mili_Sec = CurrentYear - StartingYear;

      // Getting total Seconds
      const Total_Seconds = Math.floor(Diff_Mili_Sec / 1000);
      setSeconds(formatLength(Total_Seconds));

      // Getting total Days
      const Total_Days = Math.floor(Total_Seconds / (60 * 60 * 24));
      setDays(formatLength(Total_Days));

      // Getting total Years
      const Total_Years = Math.floor(Total_Days / 365.25); // Approximate for leap years
      setYears(formatLength(Total_Years));
    }, 1000);

    return () => clearInterval(Interval);
    // eslint-disable-next-line
  }, []);

  return { days, years, seconds };
};

export default DataCalculation;
