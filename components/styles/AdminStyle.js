import styled from "styled-components";

const AdminStyle = styled.div`
  height: 100vh;
  font-family: "Roboto Slab", serif;
  
  .vehicles-container{
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    height: 100vh;
    position: fixed;
    float: left;
    font-size: 1.5rem;
    box-shadow: 0px 0px 20px black;
    background-color: #eef2f3;
    z-index: 1;    
  }

  .map-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    min-height: 95vh;
    float: right;
  }

  .map{
    height: 100vh;
    width: 100%;
  }
`;

export default AdminStyle;
