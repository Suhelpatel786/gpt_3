import React from "react";

import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
export default class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 3, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        style={{ backgroundColor: "darkgray", height: "500px" }}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "red" }}>
          a
        </div>
        <div key="b" style={{ backgroundColor: "green" }}>
          dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
          dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
          dummy dummy
        </div>
        <div key="c" style={{ backgroundColor: "yellow" }}>
          c
        </div>
      </GridLayout>
    );
  }
}

//***************************************************************************************to set layout properties directly on the children:*********/

// import GridLayout from "react-grid-layout";

// class MyFirstGrid extends React.Component {
//   render() {
//     return (
//       <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
//         <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
//           a
//         </div>
//         <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
//           b
//         </div>
//         <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
//           c
//         </div>
//       </GridLayout>
//     );
//   }
