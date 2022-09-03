import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
function Test() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  useEffect(() => {
   
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="table"> 
      <h1>I am .</h1> 
      {data.map((item, id) => (
       
          <img key={id} style={{height:"300px",margin:"5px",  scrollDirection: "horizontal",
          transformOrigin: "right top", overflowy: "auto",
          overflowx: "hidden"}} onClick={handleShow} src={item.show.image.original}/>
        

        ))}
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>gyghvgh</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Test;
