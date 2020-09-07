import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import Home from "./Pages/Home";
import { Modal } from "react-bootstrap";
export const StateContext = createContext({});

function App() {
  const [Editor, setEditor] = useState();
  const [ERROR, setERROR] = useState(false);
  const [chartData, setChartData] = useState({
    categories: [0, 5],
    series: [],
  });
  // const [started, setStarted] = useState(false);

  const handleClick = () => {
    var value = Editor.getValue();
    var DataArray = value.replace(/}/g, "}#").split("#");
    var dataLimit = 20;
    var dataUnity = 0;
    var erro = false;
    let select,
      group = [];
    let groupedData = {};
    let started = false;
    DataArray.forEach((val) => {
      val = val
        .replace(/\'/g, '"')
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
      let data = JSON.parse(val);
      switch (data.type) {
        case "start":
          started = true;
          select = data.select;
          group = data.group;

          break;
        case "span":
          let seconds = new Date(data.end - data.begin).getTime() / 1000;
          let hours = new Date(seconds * 1000).toISOString().substr(11, 5);

          setChartData({ ...chartData, categories: [0, hours] });
          break;
        case "data":
          dataUnity += 1;
          if (dataUnity <= dataLimit) {
            let id = "";
            let object = {};

            group.forEach((el, index) => {
              id += (index > 0 ? "_" : "") + data[el].toLowerCase();
            });

            object[id] = {};

            select.forEach((el, index) => {
              let otherValues = (groupedData[id] && groupedData[id][el]) || [];

              object[id] = { ...object[id], [el]: [...otherValues, data[el]] };
            });
            Object.assign(groupedData, object);
          } else {
            setChartData([]);
            erro = true;
            setERROR(true);
            started = false;
            return;
          }

          break;
        case "stop":
          // { type: "line", data: [4, 5] }
          if (!erro) {
            const newChartData = [];

            Object.keys(groupedData).forEach((key) => {
              const obj = groupedData[key];

              const result = [];

              select.forEach((el) => {
                let name = (key + " " + el).replace(/_/g, " ");

                result.push({
                  name: name,

                  type: "line",
                  data: obj[el],
                });
              });

              newChartData.push(...result);
            });
            dataUnity = 0;
            setChartData({ ...chartData, series: newChartData });
            started = false;
            Editor.clearHistory();
          }
          break;
        default:
          break;
      }

      Editor.setValue(value);
    });
  };
  return (
    <>
      <Modal show={ERROR} onHide={() => setERROR(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Limite de dados atingido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          O limite de linhas do tipo "data" são de até 20 para cada intervelo.
        </Modal.Body>
      </Modal>
      <div className="App">
        <StateContext.Provider
          value={{
            chartData,
            setChartData,
            handleClick,
            Editor,
            setEditor,
          }}
        >
          <Home />
        </StateContext.Provider>
      </div>
    </>
  );
}

export default App;
