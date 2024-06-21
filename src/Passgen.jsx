import { useState } from 'react';
import './Passgen.css';
export const Passgen = () => {

const [length, setLength] = useState(8);
const [includeUppercase, setIncludeUppercase] = useState(true);
const [includeLowercase, setIncludeLowercase] = useState(true);
const [includeNumbers, setIncludeNumbers] =  useState(true);
const [includeSymbols, setIncludeSymbols] = useState(true);
const [password, setPassword] = useState("");

const generatePassword = ()=>{
    let charset = "";
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbols) charset += " !@#$%^&*() -_=+" ;
    let result = "";
    for(let i=0; i < length; i++){
        const index = Math.floor(Math.random() * charset.length);
        result += charset.at(index);
    }
    setPassword(result);
}

const copy = ()=>{
    if(password){
        navigator.clipboard.writeText(password);
        alert("Passsword Copied");
    }
}
  return (
    <>
      <div className="container">
            <h1>Strong Password Generator</h1>
                <div className="input-group">
                    <label htmlFor="number">Password Length: </label>
                    <input type="number" id="number" value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}}/>
                    <div className="check-box-container">
                       <input type="checkbox" name="upper" id="upper" checked ={includeUppercase} onChange={(e=>{
                        setIncludeUppercase(e.target.checked)
                       })}/>
                        <label htmlFor="upper">Include Uppercase</label>
                        
                    </div>
                    <div className="check-box-container">
                    <input type="checkbox" name="lower" id="lower" checked = {includeLowercase} onChange={(e)=>{
                        setIncludeLowercase(e.target.checked)
                    }}/>
                        <label htmlFor="lower">Include Lowercase</label>
                        
                    </div>
                    <div className="check-box-container">
                    <input type="checkbox" name="symbol" id="symbol"checked ={includeSymbols} onChange={(e)=>{
                        setIncludeSymbols(e.target.checked)
                    }}/>
                        <label htmlFor="symbol">Include Symbols</label>
                       
                    </div>
                    <div className="check-box-container">
                    <input type="checkbox" name="num" id="num" checked = {includeNumbers} onChange={(e)=>{
                        setIncludeNumbers(e.target.checked)
                    }}/>
                        <label htmlFor="num">Include Numbers</label>
                        
                    </div>

                    <button className="generate-button"onClick={generatePassword}>Generate Password</button>
                    <div className="generate-password">
                        <input type="text" readOnly value={password}/>
                        <button className="copy-button" onClick={copy}>Copy</button>
                    </div>


                </div>
      </div>
    </>
  )
}
