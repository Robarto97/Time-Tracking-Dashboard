import "./styles.scss";
import jeremyImg from "./images/image-jeremy.png";
import details from "./data/data.json";
import { useState } from "react";
function App() {
  const [data, setData] = useState(details);
  const [timeType, setTimeType] = useState("weekly");
  const [isDailyActive, setIsDailyActive] = useState(false);
  const [isWeeklyActive, setIsWeeklyActive] = useState(true);
  const [isMonthlyActive, setIsMonthlyActive] = useState(false);
  const [type, setType] = useState("Week");

  return (
    <div className="App">
      <main>
        <div className="report">
          <div className="person">
            <div className="img-wrapper">
              <img src={jeremyImg} alt="Jeremy Robson" />
            </div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="report-type">
            <button
              id="daily"
              onClick={() => {
                setTimeType("daily");
                setType("Day");
                setIsDailyActive(true);
                setIsWeeklyActive(false);
                setIsMonthlyActive(false);
              }}
              className={isDailyActive ? "active" : ""}
            >
              Daily
            </button>
            <button
              id="weekly"
              onClick={() => {
                setTimeType("weekly");
                setType("Week");
                setIsDailyActive(false);
                setIsWeeklyActive(true);
                setIsMonthlyActive(false);
              }}
              className={isWeeklyActive ? "active" : ""}
            >
              Weekly
            </button>
            <button
              id="monthly"
              onClick={() => {
                setTimeType("monthly");
                setType("Month");
                setIsDailyActive(false);
                setIsWeeklyActive(false);
                setIsMonthlyActive(true);
              }}
              className={isMonthlyActive ? "active" : ""}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="aspects">
          <div className="aspect work">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[0].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[0].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[0].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
          <div className="aspect play">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[1].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[1].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[1].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
          <div className="aspect study">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[2].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[2].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[2].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
          <div className="aspect exercise">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[3].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[3].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[3].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
          <div className="aspect social">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[4].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[4].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[4].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
          <div className="aspect selfcare">
            <div className="aspect-details">
              <div className="header">
                <h2>{details[5].title}</h2>
                <div className="more-details"></div>
              </div>
              <h3>{details[5].timeframes[timeType].current}hrs</h3>
              <p>
                Last {type} - {details[5].timeframes[timeType].previous}hrs
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
