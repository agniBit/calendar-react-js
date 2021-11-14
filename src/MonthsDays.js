import "./styles.scss";

export default function MonthDays(props) {
  const days = [];
  const now = new Date();
  const cDate = now.getDate();
  const cTimeUpperLimit = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getTime();
  const cTimeLowerLimit = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  ).getTime();
  const reqLastDate = new Date(props.year, props.month + 1, 0).getDate();
  const offset = new Date(props.year, props.month, 1).getDay();
  for (let i = -offset + 1; i <= reqLastDate; i++) {
    if (i < 1) {
      days.push("");
    } else {
      days.push(i);
    }
  }
  const time = new Date(props.year, props.month, 1).getTime();
  return (
    <div className="weeks">
      {days.map((element, i) => {
        // current month
        if (cTimeLowerLimit <= time && time <= cTimeUpperLimit) {
          // past dates
          if (element < cDate) {
            return (
              <div
                className="pastDays date"
                key={props.month.toString() + i.toString()}
              >
                {element}
              </div>
            );
          }
          // prasent dates
          if (element === cDate) {
            return (
              <div
                className="currentDay date"
                key={props.month.toString() + i.toString()}
              >
                {element}
              </div>
            );
          }
          // future dates
          if (element > cDate) {
            return (
              <div key={props.month.toString() + i.toString()} className="date">
                {element}
              </div>
            );
          }
        }

        // past dates
        if (cTimeLowerLimit > time) {
          return (
            <div
              className="pastDays date"
              key={props.month.toString() + i.toString()}
            >
              {element}
            </div>
          );
        }
        // future dates
        if (cTimeUpperLimit < time) {
          return (
            <div key={props.month.toString() + i.toString()} className="date">
              {element}
            </div>
          );
        }
      })}
    </div>
  );
}
