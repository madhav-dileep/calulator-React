import { useState } from 'react'
import './App.css'

function App() {
  
  const [buffer,setBuffer] = useState("")

  const handleEquals = () => {
      // console.log(eval(buffer))
      setBuffer(eval(buffer))
  }

  return (
    <>
      
        <div style={{height:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
          <h1>Calculator</h1>
            <div style={{width:'400px'}} className='border'>
              <input defaultValue={buffer} type="text" placeholder='0' className='form-control mb-4 text-center'/>
              <div className="row mb-3">
                <div onClick={()=>{setBuffer("")}} className="col-5 btn btn-danger mx-3">c</div>
                <div onClick={()=>{setBuffer(buffer.slice(0,-1))}} className="col-2 btn btn-warning mx-3">&#10237;</div>
                <div onClick={(e)=>{setBuffer(buffer + "/")}} className="col-2 btn btn-primary mx-3">/</div>
              </div>
              <div className='row mb-3'>
                <div onClick={(e)=>{setBuffer(buffer + "7")}} className="col-2 btn btn-primary mx-3">7</div>
                <div onClick={(e)=>{setBuffer(buffer + "8")}} className="col-2 btn btn-primary mx-3">8</div>
                <div onClick={(e)=>{setBuffer(buffer + "9")}} className="col-2 btn btn-primary mx-3">9</div>
                <div onClick={(e)=>{setBuffer(buffer + "+")}} className="col-2 btn btn-primary mx-3">+</div>
              </div>
              <div className='row mb-3'>
                <div onClick={(e)=>{setBuffer(buffer + "4")}} className="col-2 btn btn-primary mx-3">4</div>
                <div onClick={(e)=>{setBuffer(buffer + "5")}} className="col-2 btn btn-primary mx-3">5</div>
                <div onClick={(e)=>{setBuffer(buffer + "6")}} className="col-2 btn btn-primary mx-3">6</div>
                <div onClick={(e)=>{setBuffer(buffer + "-")}} className="col-2 btn btn-primary mx-3">-</div>
              </div>
              <div className='row mb-3'>
                <div onClick={(e)=>{setBuffer(buffer + "1")}} className="col-2 btn btn-primary mx-3">1</div>
                <div onClick={(e)=>{setBuffer(buffer + "2")}} className="col-2 btn btn-primary mx-3">2</div>
                <div onClick={(e)=>{setBuffer(buffer + "3")}} className="col-2 btn btn-primary mx-3">3</div>
                <div onClick={(e)=>{setBuffer(buffer + "*")}} className="col-2 btn btn-primary mx-3">*</div>
              </div>
              <div className='row mb-3'>
                <div onClick={(e)=>{setBuffer(buffer + ".")}} className="col-2 btn btn-primary mx-3">.</div>
                <div onClick={(e)=>{setBuffer(buffer + "0")}} className="col-2 btn btn-primary mx-3">0</div>
                <div onClick={handleEquals} className="col-5 btn btn-success mx-3">=</div>
                
              </div>
            </div>
        </div>
    </>
  )
}

export default App
