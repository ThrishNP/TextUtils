import React, { useState } from 'react'

export default function About(props) {

let myStyle = {
    color: props.mode === "dark"? "#3a3e41":"white",
    backgroundColor: props.mode === "dark"? "white":"#3a3e41"
}

    return (
        <div className='container p-4'>
            <h1 style={{color: props.mode === "dark"? "white":"#3a3e41"}}>About</h1>
            <div className="accordion my-4"  id="accordionExample">
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Convert your text to uppercase and lowercase. Copy your text and you can remove the extra spaces. See your text in words and letters and you can preview your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free to use website where you can Analyze your text as you want.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils works in every browser and is very easy to use.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
