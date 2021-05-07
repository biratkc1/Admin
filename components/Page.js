import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";


const theme = {
   red: "#FF0000",
   black: "#393939",
   newBlack: "black",
   blue: "#005AA7",
   darkBlue: "#112d4e",
   grey: "#363F54",
   lightgrey: "#E1E1E1",
   offWhite: "#EDEDED",
   honeyWhite: "#F1FAEE",
   lightRed: "#E63946",
   green: "#2ECC40",
   bs3: "0 6px 12px rgba(0,0,0,0.16), 0 6px 12px rgba(0,0,0,0.23)",
   bs2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
   backgroundColor: "#c2b394"
};

const Inner = styled.div`
  overflow:hidden;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'radnika_next';
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <Meta/>
          <Inner>{this.props.children}</Inner>
      </ThemeProvider>
    );
  }
}

export default Page;