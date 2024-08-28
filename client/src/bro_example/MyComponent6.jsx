 import React, {useState, useEffect, useRef} from "react";

 function MyComponent6(){

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);
    const inputRef4 = useRef(0);

 

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        inputRef4.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
        inputRef4.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef4.current.style.backgroundColor = "";
    }
    function handleClick4(){
        inputRef4.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        inputRef4.current.style.backgroundColor = "yellow";
    }

    return(
    <div>
        <button onClick={handleClick1}>
            Click!
        </button>
        <input ref={inputRef1}></input>
        <p></p>
        <button onClick={handleClick2}>
            Click!
        </button>
        <input ref={inputRef2}></input>
        <p></p>
        <button onClick={handleClick3}>
            Click!
        </button>
        <input ref={inputRef3}></input>
        <p></p>
        <button onClick={handleClick4}>
            Click!
        </button>
        <input ref={inputRef4}></input>
    </div>
        

    );
 }

 export default MyComponent6