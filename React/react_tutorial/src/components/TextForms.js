import React, { useState } from 'react'

export const TextForms = (props) => {
    const handleUpClick = (e)=>{
        e.preventDefault()
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    return (
        <div className="container">
            <h1 className='my-3'>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows = "8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
            </form>
        </div>
    )
}
