import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Upper was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        console.log("Lower was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    } 



    const handleCountSpecialChar= ()=>{
        let newText=text.split('');
        const punct = "!,:;.-?@#$%^&*";
        let count=0;
        for (let i=0; i<text.length; i++){
            if(punct.includes(newText[i])){
                count=count+1;
            }
        }
        count=count.toString()+ " special characters";
        setSpecialchar(count);
        // return(
        //     <p>{count} special characters</p>
        // )
    }
    // let txt=document.getElementById('exampleFormControlTextarea1');
    // txt.addEventListener('change', handleCountSpecialChar);
    const handleReplace = ()=>{
        let newText=text;
        let repval=prompt("Enter the word to be replaced:")
        let toreplace=prompt("Enter the text that you want to replace with:");
        console.log(repval+ toreplace);
        newText=newText.replace(repval, toreplace)
        setText(newText);
    }
    const handleCamelCase = ()=>{
        let words=text.split(" ");
        let newText='';
        words.forEach(element => {
            newText+=element.charAt(0).toUpperCase()+ element.slice(1)+ " ";    //slice(start, end) gives string from start index to end index if end not given, it gives from start index to the end of the string
            //OR
            // newText+=element.replace(element.charAt(0),element.charAt(0).toUpperCase()) + " ";
        });
        // newText=newText.join(" ");
        setText(newText);
        props.showAlert("Text changed to Camel Case ", "success");
    }
    const handleReverseCase = ()=>{
        let newText= text.split('');
        for(let i=0; i<text.length; i++) {
            
            if(newText[i]===newText[i].toLowerCase()){
                newText[i]=newText[i].toUpperCase();
            }
            else{
                newText[i]=newText[i].toLowerCase();
            }
            props.showAlert("Text changed to reverse case", "success");
        }
        // let newText= text.split("").reverse().join(""); 

        newText=newText.join('');
        setText(newText);
    }

    const handleOnchange=(event)=>{   
        console.log("On change");
        setText(event.target.value);   //the event happening will be noted and as the event is typing in the textbox thus event.target will give the text typed and its value will be set into the textbox by setText as the value of textbox is now text
    }

    
    const changeTheme = () => {
        if(document.querySelector('.form-control').style.backgroundColor === "white"){
            document.querySelector('.form-control').style.backgroundColor = "black";
            document.querySelector('.form-control').style.color = "white";
            props.setMode('Light Theme');
        }
        else{
            document.querySelector('.form-control').style.backgroundColor = "white";
            document.querySelector('.form-control').style.color = "black";
            props.setMode('Dark Theme');
        }
      }
    

    // const [text, setText]= useState('Enter the text');
    const [text, setText]= useState('');
    // const [theme, setTheme]= useState(props.mode==="light"? "Dark Theme":"Light Theme");
    const [specialchar, setSpecialchar]= useState('');
    // setText('hey');

  
  return (
    <>
        <div className='container mt-5'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter the text here</label>
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"? "black": "white", color: props.mode==="dark"? "white": "black"}} placeholder='Type here' value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="9"></textarea>
                {/*one curly brace for javascript and other for javascript object as css have to be written in javascript object in jsx*/}
            </div>
            <button disabled={text.length===0} onClick={handleUpClick} className='btn btn-primary my-2 mx-2'>Convert to uppercase</button>
            <button disabled={text.length===0} onClick={handleLoClick} className='btn btn-primary my-2 mx-2'>Convert to lowercase</button>
            <button disabled={text.length===0} onClick={handleClearClick} className='btn btn-primary my-2 mx-2'>Clear Text</button>
            <button disabled={text.length===0} onClick={changeTheme} className='btn btn-primary my-2 mx-2'>{props.theme}</button>
            <button disabled={text.length===0} onClick={handleReverseCase} className='btn btn-primary my-2 mx-2'>Reverse Case</button>
            <button disabled={text.length===0} onClick={handleCamelCase} className='btn btn-primary my-2 mx-2'>Camel Case</button>
            <button disabled={text.length===0} onClick={handleReplace} className='btn btn-primary my-2 mx-2'>Replace Text</button>
            <button disabled={text.length===0} onClick={handleCountSpecialChar} className='btn btn-primary my-2 mx-2'>Count special characters</button>
            <button disabled={text.length===0} onClick={handleCopy} className='btn btn-primary my-2 mx-2'>Copy Text</button>
        </div>
        <div className='container'>
            <h3 className='mt-4'>Your text summary</h3>
            {/* <p>{text.split(" ").length-1} words and {text.length} character</p> */}
            <p>{text.includes("\n")? text.split("\n").filter((element)=>{return element.length!==0;}).length: text.split(" ").filter((element)=>{return element.length!==0;}).length} words and {text.length} character</p>   
            {/* filter takes a function with parameter element (of array) which if returns true then that element is included in the array */}
            <p>{(text.includes("\n")? text.split("\n").filter((element)=>{return element.length!==0;}).length: text.split(" ").filter((element)=>{return element.length!==0;}).length)*0.08} minutes read</p>
            <p>{specialchar}</p>
            <h3 className='mt-3'>Preview</h3>
            <p className='previewText' style={{color: text.length>0? "black":"rgb(197, 197, 197)"}}>{text.length>0? text: "Enter something to preiew it here"}</p>

        </div>
        
    </>
  )
}
