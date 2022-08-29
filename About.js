import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] =useState({
    //     backgroundColor: "white",
    //     color: "black"
    // })
    // const [btnText, setbtnText]= useState("Dark mode");
    // const toggleStyle = ()=>{
    //     if(myStyle.color==="white"){
    //         setMyStyle({
    //             backgroundColor: "white",
    //             color: "black"
    //         })
    //         setbtnText("Dark mode");
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: "black",
    //             color: "white"
    //         })
    //         setbtnText("Light mode");
    //     }
    // }
    let myStyle={
        backgroundColor: props.mode==="light"? "white":"black",
        color: props.mode==="light"? "black":"white"
    }
  return (
    <>
    <div className="accordion container my-5" id="accordionExample" style={myStyle}>
        <h2 className='my-5 text-center fs-1 fw-semibold'>About Us</h2>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, time to read the text, text preview, etc. 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong> Edit your text</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Edit your text with TextUtil features like Convert to upper case, convert to lower case, Reverse case, Camel Case, Clear text, Replace text, Count special characters, Copy text, etc. It also provides dark mode to use the website in low light.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
    </div>
    {/* <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button> */}
    </div>
    </>
  )
}
