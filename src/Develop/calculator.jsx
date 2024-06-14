import React, { useState } from 'react'


export default function Calculator() {
  

  const [result, setResult] = useState("");

  const handleClick = (e) =>{

    setResult(result.concat(e.target.name));
  }

  const clear = () =>{

     setResult("");
  }

  const calculate = () =>{

    setResult(eval(result).toString());
  }

  return (
   <>
<div>

  <form >

     <input type = "text" className='txt' value={result} />

  </form>

    <div >

<h2 align = "center"></h2>



<button id = "c" onClick={clear}> C </button>
 
 <button id = "divide" name = "/" onClick={handleClick}>&divide;</button>

 <button id = "multi" name = "*" onClick={handleClick}> &times; </button>

 <button id = "sum" name = "+" onClick={handleClick}> + </button>

 <button id = "sub" name = "-" onClick={handleClick}> &ndash; </button>

 <button id = "nine" name = "9" onClick={handleClick}> 9 </button>

 <button id = "eight" name = "8" onClick={handleClick}> 8 </button>

 <button id = "seven" name = "7" onClick={handleClick}> 7 </button>

 <button id = "six" name = "6" onClick={handleClick}> 6 </button>

 <button id = "five" name = "5" onClick={handleClick}> 5 </button>

 <button id = "four" name = "4" onClick={handleClick}> 4 </button>

 <button id = "three" name = "3" onClick={handleClick}> 3 </button>

 <button id = "two" name = "2" onClick={handleClick}> 2 </button>

 <button id = "one" name = "1" onClick={handleClick}> 1 </button>

 <button id = "zero" name = "0" onClick={handleClick}> 0 </button>

 <button id = "equal" onClick={calculate}> = </button>

   </div>

 </div>
    </>
  )
}

