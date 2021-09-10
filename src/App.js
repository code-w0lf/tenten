import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Box from "./Box";

function App() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState([0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const initGrid = () => {
    let newGrid = [];

    for (var i = 0; i < rows; i++) {
      newGrid.push([]);
    }

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        newGrid[i].push(0);
      }
    }

    setGrid(newGrid);
  };

  const play = () => {
    setIsPlaying(true);
    initGrid();
  };

  console.log(grid);

  return (
    <Container
      fluid
      className="bg-white text-center p-5"
      style={{ height: "100%" }}
    >
      <h1 className="mb-5">TEN TEN</h1>
      <Container>
        {isPlaying &&
          grid.map((x) => (
            <Row>
              {x.map((y) => (
                <Col xs="auto" style={{ padding: "0" }}>
                  <Box>{y}</Box>
                </Col>
              ))}
            </Row>
          ))}
        {!isPlaying && (
          <Button variant="primary" onClick={play}>
            Play
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default App;
