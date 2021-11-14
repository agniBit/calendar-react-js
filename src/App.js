import { useEffect, useState } from "react";
import Days from "./days";
import Months from "./Months";
import MonthDays from "./MonthsDays";
import "./styles.scss";

export default function App() {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    const now = new Date();
    setMonth(now.getMonth());
    setYear(now.getFullYear());
  }, []);

  const changeHandler = (c) => {
    if (month + c !== -1 || month + c !== 12) {
      setMonth(month + c);
    }
    if (month + c === -1) {
      setMonth(11);
      setYear(year - 1);
    }
    if (month + c === 12) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  return (
    <div className="mid">
      <div className="App box">
        <div className="date_year">
          <div>
            <button
              className="round circle"
              onClick={() => {
                changeHandler(-1);
              }}
            >
              {"<"}
            </button>
          </div>
          <div>{Months[month] + " " + year}</div>
          <div>
            <button
              className="round circle"
              onClick={() => {
                changeHandler(1);
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="gred">
          <Days />
          <MonthDays month={month} year={year} />
        </div>
      </div>
    </div>
  );
}
