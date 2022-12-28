import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput]=useState('')
  const [arr, setArr]=useState([])

  const addNumber = () => {
    setArr([...arr, input])
    setInput('')
  }

  const reset = () => {
    window.location.reload()
  }
  return (
    <div className="App">
    <h1 style={{ color: 'blue', margin: '20px' }}>Selection Sort</h1>
    <div style={{
                display: 'flex',
                justifyContent:'center',
                alignContent:'center',
                flexDirection: 'row',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                marginLeft: '300px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }} >
      {selectionSort(arr).map((e, index) => (
        <p style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }} key={index}>{e}</p>))}
    </div>
    <div>
      <input 
        type="number"
        value={input}
        placeholder="type here..."
        onChange={e => setInput(+e.target.value)}
      />
      <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }} onClick={addNumber}>Add</button>
      <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }} onClick={reset}>Reset</button>
    </div>
      
    </div>
  );
}

export default App;


const selectionSort = (arr) =>{
  let len = arr.length;
  for(let i =0; i< len-1; i++){
    let minIndex =i;
    for(let j = i+1; j < len; j++){
      if(arr[j] < arr[minIndex]){
        minIndex=j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    
  }
  return arr
}
