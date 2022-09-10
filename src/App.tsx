import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Student Name: Sen
                Qiao
                <h1>Hello World</h1>
                <img
                    src={process.env.PUBLIC_URL + "/images/hutao.gif"}
                    alt="Hutao"
                />
                <ol>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ol>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div
                style={{
                    backgroundColor: "red",
                    float: "left",
                    width: "100%",
                    padding: "10px",
                    height: "300px"
                }}
            >
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>Second column.</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
