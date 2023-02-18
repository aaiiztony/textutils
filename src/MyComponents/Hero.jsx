import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Hero(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })
  
  // const [btnInfo, setBtnInfo] = useState("Enable Dark Mode")
  // const [btnStyle, setBtnStyle] = useState({
  //   backgroundColor:"black",
  //   color:"white"
  // })

  function handleOnClickUp() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "info");
  }
  function clearField() {
    setText("");
    props.showAlert("Cleared the textbox", "success");
  }
  function copyText() {
    let myBox = document.getElementById('myBox')
    myBox.select();
    navigator.clipboard.writeText(myBox.value);
    props.showAlert("Copied to Clipboard", "success");
  }
  function handleOnClickLow() {
    console.log("Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "info");
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  //create a new hook to change the state (react would automatically watch the element)
  const [text, setText] = useState("");
  return (
    <div className="container space w-75 p-2 space" >
      <Form.Group className="mb-2">
        <div className={`d-flex justify-content-between py-2 text-${props.mode==='white'?'black':'white'}`}>
        <h3 className="px-2">Enter your text to analyse</h3>
        </div>
        <div className="shadow">
        <Form.Control
          as="textarea"
          value={text}
          className={`rounded bg-${props.mode==='black'?'black':'white'} text-${props.mode==='white'?'black':'white'}`}
          style={{resize:"none"}}
          rows={12}
          onChange={handleOnChange}
          id="myBox"
        />
        </div>
      </Form.Group>
      <Button variant="primary my-1 mx-2" onClick={handleOnClickUp}>
        Convert to {props.upc}
      </Button>
      <Button variant="primary my-1" onClick={handleOnClickLow}>
        Convert to {props.lwc}
      </Button>
      <Button variant="success my-1 mx-2" onClick={clearField}>
        Clear
      </Button>
      <Button variant="success my-1" onClick={copyText} >
        Copy
      </Button>
      {/* use "useState" to create the bug free version of wordcounter */}
      <p className={`p-2 text-${props.mode==='white'?'black':'white'}`}>
        Sentence Count : {(text.split(".")).length-1} <br />
        Word Count : {text.split(" ").length-1} <br />
        Character Count : {text.length}
        <br />
      </p>
      <span></span>
      <hr />
      <h2 className={`text-center text-${props.mode==='white'?'black':'white'}`}>Preview</h2>
      <span className={`text-${props.mode==='white'?'black':'white'}`}>{Math.round(0.008 * text.split(" ").length)} min read</span>
      <p className={`text-${props.mode==='white'?'black':'white'}`}>{text.length>0?text:"Enter something to preview"}</p>
    </div>
  );
}

Hero.propTypes = {
  upc: PropTypes.string,
};
export default Hero;
