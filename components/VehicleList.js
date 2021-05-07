import Select, { components } from "react-select";
import VehicleListStyle from "./styles/VehicleListStyle";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import InfoModal from "./InfoModal";

import useSWR from "swr";
import { fetcher } from "../library/fetcher";

// overide the deafault menu list and add custom styled-components
const customStyles = {
  menu: (base) => ({
    ...base,
    backgroundColor: "transparent",
    boxShadow: "0px",
    border: "none",
    border: "1px solid transparent",
    color: "black",
  }),
  option: (base) => ({
    ...base,
    color: "black",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }),
};

function VehicleList(props) {
  const { Option } = components;

  let go = props;

  const { data, error } = useSWR("/api/vehicleList", fetcher);
  if (error) {
    console.error(error);
  }

  const CustomSelectOption = (props) => (
    <Option className="options" {...props}>
      <div className="parent">
        <div className="div1">
          <div>{props.data.vehicle_id}</div>
          <div>{props.data.driver_name}</div>
        </div>
        <div className="div2">
          <div className="number">
            <Counter from={props.data.mph} to={70} />
          </div>
          <div>
            <img src="https://res.cloudinary.com/threesixzero/image/upload/v1620337381/Untitled_design_2.webp" />
          </div>
        </div>
        <div className="div3">
          <div className="number">
            <EnergyCounter from={props.data.miles} to={0} />
          </div>
          <div>
            <img src="https://res.cloudinary.com/threesixzero/image/upload/v1620337381/Untitled_design_3.webp" />
          </div>
        </div>
        <div className="div4">
          <div className="number">
            <TotalMilesCounter from={props.data.total_miles} to={1000} />
          </div>
          <div>
            <img src="https://res.cloudinary.com/threesixzero/image/upload/v1620337382/Untitled_design_1.webp" />
          </div>
        </div>
        <div className="div5">
          <div className="status">{props.data.status}</div>
          <div>
            <button className="button" onClick={() => go.map.flyTo({ center: [props.data.long, props.data.lat] })}>
              Locate
            </button>
            <InfoModal data={props.data}/>
          </div>
        </div>
      </div>
    </Option>
  );

  return (
    <VehicleListStyle>
      <Select
        styles={customStyles}
        className="select"
        placeholder="Search by Vehicle ID"
        options={data}
        components={{ Option: CustomSelectOption }}
        getOptionLabel={(option) => `${option.driver_name}`}
        getOptionValue={(option) => option.vehicle_id}
        menuIsOpen={true}
        maxMenuHeight="99vh"
        required
      />
    </VehicleListStyle>
  );
}

export default VehicleList;

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      repeat: "Infinity",
      repeatType: "reverse",
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div ref={nodeRef} />;
}

function EnergyCounter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 300,
      onUpdate(value) {
        node.textContent = value.toFixed(1);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div ref={nodeRef} />;
}

function TotalMilesCounter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 200,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div ref={nodeRef} />;
}
{
  /* <button onClick = {() =>
    props.map.flyTo({ center: [-118.4107187, 33.9415889] })
}>
    GO TO
</button> */
}
