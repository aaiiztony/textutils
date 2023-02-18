import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Hero(props) {
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
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  }
  function handleOnClickLow() {
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
    <div className="container" >
      <Form.Group className="" >
        <div className={`d-flex align-items-center justify-content-center text-${props.mode==='white'?'black':'white'}`}>
        <h3><strong>The Text-Analyser : Text Analysis App</strong></h3>
        </div>
        <div className="d-flex shadow" style={{flexDirection:"column"}}>
        <Form.Control
          as="textarea"
          value={text}
          className={`rounded bg-${props.mode==='black'?'black':'white'} text-${props.mode==='white'?'black':'white'}`}
          style={{resize:"none"}}
          rows={11}
          onChange={handleOnChange}
          id="myBox"
        />
        <div className="d-flex justify-content-center" style={{flex:"1"}}>
        <Button disabled={text.length===0} variant="primary my-1 mx-2" onClick={handleOnClickUp}>
          Convert to {props.upc}
        </Button>
        <Button disabled={text.length===0} variant="primary my-1" onClick={handleOnClickLow}>
          Convert to {props.lwc}
        </Button>
        <Button disabled={text.length===0} variant="success my-1 mx-2" onClick={clearField}>
          Clear
        </Button>
        <Button disabled={text.length===0} variant="success my-1" onClick={copyText} >
          Copy
        </Button>
        </div>
        </div>
      </Form.Group>
      {/* use "useState" to create the bug free version of wordcounter */}
      <p className={`py-2 text-${props.mode==='white'?'black':'white'}`}>
        Sentence Count : {(text.split(".")).length-1} <br />
        Word Count : {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} <br/>
        Character Count : {text.length}
        <br />
      </p>
      <hr />
      <h2 className={`text-center text-${props.mode==='white'?'black':'white'}`}>Preview</h2>
      <span className={`text-${props.mode==='white'?'black':'white'}`}>{Math.round(0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} min read</span>
      <p className={`text-${props.mode==='white'?'black':'white'}`}>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
  );
}

Hero.propTypes = {
  upc: PropTypes.string,
};
export default Hero;
