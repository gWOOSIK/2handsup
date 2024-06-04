import React, {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosTest();
  }, []);

  const axiosTest = () => {
    axios.get('/hello')
        .then(res => {
          setMessage(res.data);
        })
        .then(err => {
          console.log(err);
        })
  }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>TEST {message}</span>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="App">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                <Button as="input" type="button" value="Input" />{' '}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </header>
      </div>
  );
}

export default App;
