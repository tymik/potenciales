// Thanks to Palid this started to work...

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Fetcher } from "./Fetcher";

export function FrontendModel({ handleClick, status }) {
  const useragent = window.navigator.userAgent;
  return (
    <>
      <Modal show={status} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading FE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          UserAgent: {useragent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close FE
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes FE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function BackendModel({ handleClick, status }) {
  return (
    <>
      <Modal show={status} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading BE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hostname from backend:
          <Fetcher />
        </Modal.Body>
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
