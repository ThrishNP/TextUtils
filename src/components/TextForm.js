import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case","success");
    }
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower Case","success");
    }
    
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text" ,"success");
    }
    
    const handleCopy = () => {
        let copy = document.querySelector("#myBox")
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Copied Text","success");
    }
    
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces Removed","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#3a3e41" }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea id="myBox" rows="8" className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#3a3e41" : "white", color: props.mode === "dark" ? "white" : "dark" }}></textarea>
                </div>
                <button className="btn btn-dark mx-2" onClick={handleUpClick} style={{ backgroundColor: props.mode === "light" ? "#3a3e41" : "white", color: props.mode === "dark" ? "black" : "white" }}>Convert to Uppercase</button>
                <button className="btn btn-dark mx-2" onClick={handleLowClick} style={{ backgroundColor: props.mode === "light" ? "#3a3e41" : "white", color: props.mode === "dark" ? "black" : "white" }}>Convert to Lowercase</button>
                <button className="btn btn-dark mx-2" onClick={handleClearClick} style={{ backgroundColor: props.mode === "light" ? "#3a3e41" : "white", color: props.mode === "dark" ? "black" : "white" }}>Clear</button>
                <button className="btn btn-dark mx-2" onClick={handleCopy} style={{ backgroundColor: props.mode === "light" ? "#3a3e41" : "white", color: props.mode === "dark" ? "black" : "white" }}>Copy</button>
                <button className="btn btn-dark mx-2" onClick={handleRemoveSpaces} style={{ backgroundColor: props.mode === "light" ? "#3a3e41" : "white", color: props.mode === "dark" ? "black" : "white" }}>Remove spaces</button>
            </div>
            <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "#3a3e41" }}>
                <h4>Text Summary</h4>
                <h6>{text.split(" ").length >= 0 ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} letters</h6>
                <h6>{0.008 * text.split(" ").length} minutes to read</h6>
                <br />
                <h4>Perview</h4>
                <h6>{text.length > 0 ? text : "Enter something"}</h6>
            </div>
        </>
    )
}
