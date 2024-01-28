import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <h1>Abhishek SHarma</h1>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
