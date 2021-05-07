import ReactDOM from "react-dom";
import { useState } from "react";
import InfoModalStyle from "./styles/InfoModalStyle";

export default function OpenPdf(props) {
  const [shown, setShown] = useState(false);
  const modalBody = () => (
    <InfoModalStyle>
      <aside className="background">
        <div className="modalArea">
          <button className="closeButton" onClick={() => setShown(false)}>
            <svg className="closeIcon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div
            style={{
              height: "35vh",
              overflow: "hidden",
            }}
          >
            <div className="parent">
              <div className="div1">
                <div className="title">Vitals</div>
                <div className="sub-title"><span>Vehicle ID:</span> {props.data.vehicle_id}</div>
                <div className="sub-title"><span>Driver:</span> {props.data.driver_name}</div>
                <div className="sub-title"><span>Energy Left:</span> 180 miles [last update: few seconds ago]</div>
                <div className="sub-title"><span>Closest Super Charger:</span>SemaConnect: 7.2 kW: 64 Perimeter Center East, Atlanta, GA 30346</div>
                <div className="sub-title"><span>Time Required to Full: </span> 32 minutes at 7.2 [nearest charger]</div>
              </div>
              <div className="div2">
               <div className="button-group">
                  <button>Plan New Route</button>
                  <button>Modify Current Route</button>
                  <button>Find Charging Locations</button>
                  <button>Schedule PM for Vehicle</button>
                  <button>View Camera Feed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </InfoModalStyle>
  );
  return (
    <>
      <button className="button" onClick={() => setShown(true)}>
        {props.title ? props.title : "More Info"}
      </button>
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </>
  );
}
