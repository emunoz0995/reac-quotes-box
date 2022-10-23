import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import QuoteContainer from './QuoteContainer'
import Button from './Button'

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIdex] = useState(randomIndex)

  const changeQuote = () => {
    const otherRandomIndex = Math.floor(Math.random() * quotes.length)
    setIdex(otherRandomIndex)

    
  }

  const colors = [
      "#d16b96", 
      "#e47a7a", 
      "#e29465", 
      "#d1b062", 
      "#b5ca78", 
      "#8dd28e", 
      "#5dd6ae", 
      "#00d8d2", 
      "#00caea", 
      "#00b7ff", 
      "#00a0ff", 
      "#5f82fb"    
  ];

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  
    return (
      <div className="App">
        <div className="container" style={{ color: colors[randomColorIndex] }}>
          <QuoteContainer
            quote={quotes[index].quote}
            author={quotes[index].author}
            
          />
          <div style={{ background: colors[randomColorIndex] }}>
          <Button
          changeQuote={changeQuote}
          colors={colors}
          randomColorIndex={randomColorIndex}
          />
          </div>
        </div>
      </div>
    )
  }

  export default App
