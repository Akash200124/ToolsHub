import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator () {
    const [length, setlength] = useState(8);
    const [numberAllow, setnumberAllow] = useState(false);
    const [charAllow, setcharAllow] = useState(false);
  
    const [password, setpassword] = useState("");
  
    //userRef hook 
    const passwordRef = useRef(null);
  
    // usercallback memorise the function  
    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllow) str += "0123456789"
      if (charAllow) str += "!@#$%^&*()_+"
  
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
  
        pass += str.charAt(char)
      }
      setpassword(pass)
  
    }, [length, numberAllow, charAllow, setpassword])
  
    // hook that useEffect page load then it call and change in the variable 
    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllow,charAllow,passwordGenerator])
  
    // useRef hook 
    const copyPasswordTOClip = useCallback(()=>{
      // the useref is use to give the some feature that UI  on click select the value and also we can define the range 
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,101);
      window.navigator.clipboard.writeText(password)
    },[password])
  
    return (
      
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
        <div className='my-5 border border-primary rounded p-5'>
          <h1 className='pb-2'>Password Generator</h1>
          <div className='d-flex  mb-4'>
            <input
              type="text"
              value={password}
              className='w-100 py-1 px-3 border border-secondary rounded'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
  
            <button type="button" class="btn btn-primary px-3 mx-2" onClick={copyPasswordTOClip}>Copy</button>
           
  
          </div>
          <div className='flex text-sm gap-x-2  '>
            <div className='flex item-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer mx-3'
                onChange={(e) => { setlength(e.target.value) }}
              />
              <label className='fs-5' >Length:{length}</label>
            </div>
            <div className='d-flex item-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={numberAllow}
                onChange={() => {
                  setnumberAllow((prev) => !prev)
                }}
              />
              <label htmlFor='numberinput' className='mx-2'>Numbers</label>
            </div>
            <div className='d-flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={charAllow}
                id='characterInput'
                onChange={() => {
                  setcharAllow((prev) => !prev)
                }}
              />
               <label htmlFor='characterInput' className='mx-2'>Special Characters</label>
            </div>
          </div>
        </div>
        </div>
      
    )
  }
  

export default PasswordGenerator
