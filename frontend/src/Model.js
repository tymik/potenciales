import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import {MyComponent} from "./Fetcher";
import os from 'os';

export default function Model({ handleClick, status }) {
  // var hostname = os.hostname();
  // var hostname = os.platform();
  // console.log(hostname);
  var appname = window.navigator.appName;
  var type = os.type();
  var release = os.release();
  var hostname = os.hostname();
  var arch = os.arch();
  var platform = os.platform();

  return (
    <>
      <Modal show={status} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>browser/navigator/?: { appname } </p>
        <p>type: { type }</p>
        <p>release: { release }</p>
        <p>hostname: { hostname }</p>
        <p>arch: { arch }</p>
        <p>platform: { platform }</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

  export function Model2({ handleClick, status }) {
    var fetchedHostname = MyComponent();
    console.log(fetchedHostname);
    return (
      <>
        <Modal show={status} onHide={handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading BE</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal! BE</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClick}>
              Close BE
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Save Changes BE
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}