import { useCallback, useState, useEffect, useRef } from "react"

function App() {

  const [length ,setlenght] = useState(7)
  const [numAllowed ,setNumAllowed] = useState(false)
  const [charAllowed ,setCharAllowed] = useState(false)
  const [password ,setPassword] = useState("")

  const passwordRef = useRef(null)

  const genPassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "€~`!@#$₹%^&*?<>,.|*"
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  } ,[length ,numAllowed ,charAllowed , setPassword])

  useEffect( () => {
    genPassword()
  } , [length , numAllowed , charAllowed , genPassword , ])

  const copyToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="bg-black h-screen w-full flex justify-center items-center flex-col gap-1">
        <div className="flex justify-center items-center flex-col gap-5 bg-slate-600 w-3/5 p-5 rounded-2xl text-white">
            <h1 className="text-3xl font-bold font-mono">Generate Password</h1>
            <div className="w-4/5 flex justify-center items-center h-12">
                <input
                  type="text"
                  placeholder="Generate Password"
                  value= {password}
                  ref={passwordRef}
                  className="rounded-l-xl p-2 bg-slate-100 h-full w-full text-2xl text-black font-bold px-5"
                  readOnly
                />

                <button onClick={copyToClip} type="submit" className="bg-red-200 h-full rounded-r-xl px-4 text-black font-bold">Copy</button>

            </div>
            <button className="border-2 p-1 px-2 rounded-xl text-orange-400 font-bold hover:border-green-500 " onClick={genPassword}>Generate New</button>
            <div className="flex items-center gap-8">
                  <div className="flex gap-2 items-center mx-2 px-1 font-bold">
                    <input 
                        type="range" 
                        min="5" 
                        max="20" 
                        value={length}
                        className="cursor-pointer "
                        onChange={
                          (e)=>{ setlenght(e.target.value)}
                        }
                    />
                    <label>length : {length}</label>
                  </div>

                  <div>
                      <input
                        type="checkbox"
                        defaultChecked = {numAllowed}
                        id="numberIp"
                        onChange={
                          ()=> setNumAllowed((prev) => !prev )
                        }
                      />
                      <label> Numbers </label>
                  </div>
                  <div>
                      <input
                        type="checkbox"
                        defaultChecked = {charAllowed}
                        id="charIp"
                        onChange={
                          ()=> setCharAllowed((prev) => !prev )
                        }
                      />
                      <label> Charators </label>
                  </div>
            </div>
        </div>
        

      </div>
    </>
  )
}

export default App
