import logo from "./logo.svg";
import "./App.css";
import UsersData from "./components/UsersData/UsersData";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import InputSection from "./components/InputSection/InputSection";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isReload, setIsReload] = useState(false);
  console.log(usersData);
  return (
    <div className="App">
      <Row className="m-5">
        <InputSection
          usersData={usersData}
          setUsersData={setUsersData}
          setIsReload={setIsReload}
          isReload={isReload}
        />
      </Row>
      <Row>
        <UsersData
          usersData={usersData}
          setUsersData={setUsersData}
          isReload={isReload}
        ></UsersData>
      </Row>
    </div>
  );
}

export default App;
