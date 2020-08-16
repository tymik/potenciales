import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import os from 'os';

export default function Model({ handleClick, status }) {
  // var hostname = os.hostname();
  var hostname = os.platform();
  console.log(hostname);

  return (
    <>
      <Modal show={status} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal! + { hostname }</Modal.Body>
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