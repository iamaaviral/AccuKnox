import { useState } from "react";
import "./App.css";
import data from "./data.json";
import CytoscapeComponent from "react-cytoscapejs";

function App() {

  const [selectedNodeData, setSelectedNodeData] = useState(null)

  const setListeners = (cy) => {
    cy.on("click", "node", (event) => {
      event.target ? setSelectedNodeData(event.target.data()) : setSelectedNodeData(null);
    });
  };

  return (
    <div className="appWrapper">
      <CytoscapeComponent
        cy={(cy) =>  {
          cy.add(data)
          setListeners(cy);
        }}
        className="cytospaceWrapper"
        // zoom={1}
        stylesheet={[
          {
            selector: "node",
            style: {
              backgroundColor: "#69e",
              label: "data(id)",
            },
          },
          {
            selector: "edge",
            style: {
              width: 3,
              color: "red",
              lineColor: "#369",
              targetArrowColor: "#369",
              targetArrowShape: "triangle",
              label: "data(label)",
              fontSize: "14px",
              color: "#777",
            },
          },
        ]}
      />
            {selectedNodeData && <div className="nodeDataWrapper">
              <h2>Selected node details</h2>
              <span>Selected NodeId: {`${selectedNodeData.id}`}</span>
              <br />
              <span>People followed count: {`${selectedNodeData.peopleFollowedCount}`}</span>
              <br />
              <span>Total post: {`${selectedNodeData.totalPosts}`}</span>
      </div>}
    </div>
  );
}

export default App;
