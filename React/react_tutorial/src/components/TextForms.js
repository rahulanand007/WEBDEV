import React, { useState } from 'react'

export const TextForms = (props) => {

    const Style = {
        fontSize: 'small'
    }
   
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
        props.showAlert('Text converted to Upper-case','success');
    }
    const handleLowClick = (e)=>{
        e.preventDefault()
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text converted to Lower-case','success');
    }
    const handleClearText = (e)=>{
        e.preventDefault()
        setText('')
        props.showAlert('Text Deleted','success');
    }
    const handleRemoveSpaces = (e)=>{
        e.preventDefault()
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces removed','success');
    }
    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container " style={{color: props.mode==='light'? 'black':'white'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea type="text" className="form-control" value={text} style={{backgroundColor: props.mode==='light'? 'white':'grey', 
                     color:props.mode==='light'? 'black':'white'}} onChange={handleOnChange} id="myBox" rows = "8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1 " style={Style} onClick={handleUpClick}>Change to UpperCase</button>
                <button type="submit" className="btn btn-primary mx-1 my-1" style={Style} onClick={handleLowClick}>Change to LowerCase</button>
                <button type="submit" className="btn btn-primary mx-1 my-1" style={Style} onClick={handleClearText}>Clear Text</button>
                <button type="submit" className="btn btn-primary mx-1 my-1" style={Style} onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            </form>
            <hr></hr>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{wordcounter()} words and {text.length} characters.<br></br>
               It will take approx. { 0.5 * wordcounter()} seconds({0.01 * wordcounter()} minutes) to read this.  </p>
               <hr />
            <h3>Preview</h3>
            <p>{text.length===0?'Enter text in above box to preview here.':text}</p>
        </div>
        </>
    )
}
