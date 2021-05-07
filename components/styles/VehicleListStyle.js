import styled from "styled-components";

const VehicleListStyle = styled.div`
  width: 100%;
  font-family: "Roboto Slab", serif;

  .select {
    margin: 0.5em;
    font-size: 10px;
    border: none;
  }

  .options {
    border: none;
    font-size: 1.2em;

    .parent {
      display: grid;
      grid-template-columns: 0.2fr 0.2fr 0.2fr 0.3fr 0.3fr 0.3fr;
      grid-template-rows: 0.8fr 0.3fr;
      padding: 4% 4% 1% 4%;
      border-radius: 5px;
      min-height: 125px;
      background: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
    .div1 {
      grid-area: 1 / 1 / 2 / 7;
    }
    .div2 {
      text-align: center;
      grid-area: 2 / 1 / 3 / 2;
    }
    .div3 {
      text-align: center;
      grid-area: 2 / 2 / 3 / 3;
    }
    .div4 {
      text-align: center;
      grid-area: 2 / 3 / 3 / 4;
    }
    .div5 {
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      grid-area: 2 / 4 / 3 / 7;
    }

    .title {
    }
    .sub-title {
    }
    .number {
      font-size: 1.5em;
      font-weight: bold;
    }
    img {
      height: 4vh;
      padding: 7px;
    }
    .status {
      width: 100%;
      margin-left: 3%;
      line-height: 2vw;
      border-radius: 1px;
    }
    .button {
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      display: inline-block;
      width: 40%;
      margin-left: 3%;
      background-color: black;
      border-color: black;
      color: white;
      border: none;
      line-height: 2vw;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      :hover {
        cursor: pointer;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
`;

export default VehicleListStyle;
