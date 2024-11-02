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

  // formate date so thar day isn't greater than 365
  const formatDate = (value) => {
    return value % 365;
  };

  // Convert total seconds within a day to HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours} hours  ${minutes} mins  ${seconds} sec`;
  };

  useEffect(() => {
    const Interval = setInterval(() => {
      const CurrentYear = new Date();

      // Getting the difference in milliseconds
      const Diff_Mili_Sec = CurrentYear - StartingYear;

      // Getting total Seconds
      const Total_Seconds = Math.floor(Diff_Mili_Sec / 1000);

      // seconds in every 24 hr
      const secondWithinDay = Total_Seconds % 86400;
      setSeconds(formatTime(secondWithinDay));

      // Getting total Days
      const Total_Days = Math.floor(Total_Seconds / (60 * 60 * 24));
      setDays(formatDate(Total_Days));

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
