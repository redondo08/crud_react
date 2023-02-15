import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Formulario from './componentes/formulario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <div className="row  mt-5">
      <div className="col-lg-6 m-auto" >
      <Formulario/>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
