import { useState } from "react";

type DateUnit = "day" | "month" | "year";

const useDateRange = () => {
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  const calculateDateRange = (duration: number, unit: DateUnit) => {
    const now = new Date();
    let endDate = new Date(now);

    switch (unit) {
      case "day":
        endDate.setDate(now.getDate() + duration);
        break;
      case "month":
        endDate.setMonth(now.getMonth() + duration);
        break;
      case "year":
        endDate.setFullYear(now.getFullYear() + duration);
        break;
      default:
        throw new Error("Invalid unit");
    }

    const format = (date: Date) => date.toISOString().split("T")[0];

    setDateRange({
      startDate: format(now),
      endDate: format(endDate),
    });
  };

  return { dateRange, calculateDateRange };
};

export default useDateRange;
