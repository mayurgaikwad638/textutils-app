
import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("") ;
     const [nowords,setwords] = useState(0) ;

     const countwords = (e)=>{
        console.log(text) ;
        let c = text.split(" ").length ;
        console.log(text.split(" ")) ;
        if(text.charAt(text.length-1)===' '){
            c-- ;
        }
        console.log(c) ;
         setwords(c) ;
    }

    // setwords(c) ;

    
    const onchangeHandler = (e)=> {
        setText(e.target.value) ;
        countwords() ;
    }

    const clickUPhandler = ()=> {
        let newtext = text.toUpperCase() ;
        setText(newtext) ;
        props.alert('Converted to uppercase','success');
    }

    const clickLWhandler = ()=> {
        let newtext = text.toLowerCase() ;
        setText(newtext) ;
        props.alert('Converted to lowercase','success');
    }

    const clearText = ()=> {
        let newtext = '' ;
        setText(newtext) ;
        props.alert('Text cleared','success');
    }

    const copytext = () => {
        let text = document.getElementById('textarea') ;
        text.select() ;
        navigator.clipboard.writeText(text.value) ;
        props.alert('Copied to clipboard','success');
    }

    const removespace = () => {
        let newtext = text.split(/[ ]+/) ;
        setText(newtext.join(' ')) ;
        props.alert('Extra spaces removed','success');
    }
    
  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`} >

    <h3>Enter the text here</h3>
    <div className="mb-3">
    
    <textarea className="form-control" id="textarea" value={text} rows="10" onChange={onchangeHandler}></textarea>
    </div>

    <button className="btn btn-primary mx-2 my-2" onClick={clickUPhandler}>Convert to UpperCase</button>
    <button className="btn btn-success mx-2 my-2" onClick={clickLWhandler}>Convert to LowerCase</button>
    <button className="btn btn-warning mx-2 my-2" onClick={clearText}>Clear Text</button>
    <button className="btn btn-info mx-2 my-2" onClick={copytext}>Copy Text</button>
    <button className="btn btn-danger mx-2 my-2" onClick={removespace}>Remove extra spaces</button>
    </div>
    
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
        <h3>Text Summary</h3>
        <p><b>{nowords}</b> words and <b>{text.length}</b> characters</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
