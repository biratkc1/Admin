import styled from "styled-components";

const InfoModalStyle = styled.div`
  font-family: "Oswald", serif;
  border-radius: 5px;


  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform: translateZ(0);
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modalArea {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2.5em 1.5em 1.5em 1.5em;
    border-radius: 15px;
    background-color: white;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }


  @media screen and (min-width: 500px) {
    .modalArea {
      left: 50%;
      top: 50%;
      height: auto;
      transform: translate(-50%, -50%);
      max-width: 80%;
      max-height: calc(100% - 1em);
    }
  }

  .closeButton {
    position: sticky;
    float: right;
    top: 0;
    right: 0;
    margin: -5px;
    padding: 1.5em;
    line-height: 1;
    background: #E63946;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
  }

  .closeIcon {
    width: 25px;
    height: 25px;
    fill: transparent;
    stroke: black;
    stroke-linecap: round;
    stroke-width: 2;
  }
  ._hide-visual {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }  
  hr {
    margin: 0.75rem 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .parent {
    display: grid;
    grid-template-columns: 1fr
    grid-template-rows: 1fr ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .title{
      font-weight: bold;
      font-size: 1.5rem;
    }
    .sub-title{
      font-size: 1rem;
    }
    span{
      font-weight: bold;
      margin-right: 1%;
    }
    .button-group button{
      background-color: black; 
      border: 1px solid black; 
      color: white; 
      padding: 10px 24px; 
      cursor: pointer; 
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      border-radius: 5px;
      margin: 4px;
    }
    .button-group button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }
    .button-group:after {
      content: "";
      clear: both;
      display: table;
    }
    .button-group button:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
    .div1 { grid-area: 1 / 1 / 1 / 2; }
    .div2 { grid-area: 2 / 1 / 3 / 2; }
  }
`;

export default InfoModalStyle;
