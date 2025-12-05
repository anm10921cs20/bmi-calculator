import { useState } from 'react'
import './App.css'

const App = () => {

  const [height, setHeight] = useState('');
  const[weight, setWeight] = useState('');
  const [ibmResult, setIbmResult] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () =>{
    const isHeightValue = /^\d+$/.test(height);
    const isWeightValue = /^\d+$/.test(weight);


    if(isHeightValue && isWeightValue)
    {
      const heightValue = height/100;
      const bmiValue = weight / (heightValue * heightValue);
      setIbmResult(bmiValue.toFixed(2))
      if(bmiValue < 18.5)
      {
        setStatus("Under Weight")
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.5)
      {
        setStatus('Normal Weight')
      }
      else if(bmiValue >= 24.5 && bmiValue < 29.5)
      {
        setStatus('Over Weight')
      }
      else
      {
        setStatus('Obese')
      }
      setError("")
    }
    else
    {
      setError('Please Type Valid Height And Weight Numberic values')
      setStatus("")
      setIbmResult(null)
    }
  } 

  const hadleKeyDown = (e) =>{
    if(e.key=="Enter")
    {
      calculateBMI();
    }
  }

  const handleClear = () => {
    setError("")
    setHeight("")
    setIbmResult(null)
    setWeight("")
    setStatus("")
  }
  

  return (
    <>
      <div className='main-container'>
        <div className='box'>
          <p className='box-text'>Diet Routine</p>
        </div>
        <div className='content'>
          <h1>IBM CALCULATOR</h1>
         {error &&  <p className='error'>{error}</p>}
          <div className='height'>
            <label htmlFor="height">Height (Cm)</label>
            <input type="text" id="height" value={height} onChange={(e)=> setHeight(e.target.value)} />
          </div>
          <div className='weight'>
            <label htmlFor="weight">Weight (Kg)</label>
            <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} onKeyDown={hadleKeyDown} />
          </div>
          <div className='button'>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <button onClick={handleClear}>Clear</button>
          </div>
          {ibmResult !== null && <div className='result'>
            <p>Your BMI is {ibmResult}</p>
            <p>Status : {status}</p>
          </div>}


        </div>
      </div>
    </>
  )
}

export default App
