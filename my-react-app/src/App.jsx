import { useState } from "react"

function App() {
  const [heaight,setHeight] = useState(0)
  const [wieght,setWieght] = useState(0)
  const [result,setResult] = useState("")
  const [fit,setFit] = useState("")
  const [resultt,setResultt] = useState("")
  const calculate = (e)=>{
    e.preventDefault()
    console.log(wieght/(((heaight/100)*(heaight/100))))
    if(wieght/(((heaight/100)*(heaight/100))) >= 18.5 && wieght/(((heaight/100)*(heaight/100))) <= 24.9){
      setFit('fit')
      setResultt('fit')
      setResult(`${(wieght/(((heaight/100)*(heaight/100)))).toFixed(2)}`)
    }else if (wieght/(((heaight/100)*(heaight/100))) > 24.9){
      setFit('')
      setResult(`${(wieght/(((heaight/100)*(heaight/100)))).toFixed(2)}`)
      setResultt(`fat your Weight must be between ${((((heaight/100)*(heaight/100)))*24.9).toFixed(1)} , ${((((heaight/100)*(heaight/100)))*18.5).toFixed(1)}`)
    }else{
      setFit('')
      setResult(`${(wieght/(((heaight/100)*(heaight/100)))).toFixed(2)}`)
      setResultt(`thin your Weight must be between ${((((heaight/100)*(heaight/100)))*24.9).toFixed(1)} , ${((((heaight/100)*(heaight/100)))*18.5).toFixed(1)}`)
    }
  }
  return (
    <div className="bg-dark" style={{ minHeight: '100vh' }}>
      <div className="container py-3">
        <div className="header text-center">
          <h2 className="text-capitalize text-light">welcome to my website <br /> to check your health</h2>
        </div>
        <div className="body text-light mt-3">
          <form className="form d-flex flex-column gap-3">
            <div className="form-div">
              <label className="form-label">Your Heaight</label>
              <input type="number" className="form-control" onChange={(e)=>{
                setHeight(e.target.value)
              }}/>
            </div>
            <div className="form-div">
              <label className="form-label">Your Weight</label>
              <input type="number" className="form-control" onChange={(e)=>{
                setWieght(e.target.value)
              }}/>
            </div>
            <div className="form-div text-center mt-3">
              <button className="btn btn-primary w-50" onClick={calculate}>Calculate Now</button>
            </div>
          </form>
        </div>
        <div className="result text-center mt-4">
              <h5 className="text-light text-capitalize">If the result is between 18.5 and 24.9, your weight is ideal and it is important to maintain it</h5>
              {
                resultt?<h5 className="text-primary text-capitalize">your are {fit?<span className="text-success text-capitalize">{resultt}</span>:<span className="text-danger text-capitalize">{resultt}</span>}</h5>:""
              }
              {
                resultt?<h5 className="text-primary text-capitalize"> result is {result}</h5>:""
              }
        </div>
      </div>
    </div>
  )
}

export default App
