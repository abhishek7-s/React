import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github , {gitLoader} from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children:[
//         {
//           path:'',
//           element: <Home/>
//         },
//         {
//           path:'About',
//           element: <About/>
//         },
//         {
//           path:'Contact',
//           element: <Contact/>
//         },
//         {
//           loader:{gitLoader},
//           path:'Github',
//           element: <Github/>
//         }
//       ]
     
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<Github />} />
      <Route 
      loader={gitLoader}
      path='github/:userId' 
      element={<Github />}
       />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
