import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-test'>GEAR UP < br/> YOUR NFT < br/> PURCHASE!</h1>
      
      <button className='btn-grad'>BUY NFT</button>
      <button className='btn-grad'>Finance</button>
       <div className="dark-bg">
        
        <div className="gradient-bg"></div>
        
      </div>
    </div>
  )
}

export default App
