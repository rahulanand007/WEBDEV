import React, { useState } from 'react'

export const TextForms = (props) => {
   
    let wordcounter = ()=>{
        if(text.split(" ")[text.split(" ").length-1]===''){
           return text.split(" ").length-1
            
           }else{
               return text.split(" ").length
           }
    }
    const handleUpClick = (e)=>{
        e.preventDefault()
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = (e)=>{
        e.preventDefault()
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = (e)=>{
        e.preventDefault()
        setText('')
    }
    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
            <h1 className='my-3'>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows = "8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1 " onClick={handleUpClick}>Change to UpperCase</button>
                <button type="submit" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Change to LowerCase</button>
                <button type="submit" className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            </form>
            <hr></hr>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{wordcounter()} words and {text.length} characters.<br></br>
               It will take approx. { 0.5 * wordcounter()} seconds({0.01 * wordcounter()} minutes) to read this.  </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
