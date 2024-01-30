import React from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'
import { useState, useEffect } from 'react'

function App() {

  const [ThemeMode, setThemeMode] = useState("light")

  const light = ()=>{
    setThemeMode("light")
  }
  const dark = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    let htmlBody = document.querySelector('html').classList
    htmlBody.remove("light","dark")
    htmlBody.add(ThemeMode)
  },[ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode , dark , light}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>



  )
}

export default App
