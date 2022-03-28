import './App.css';
import Quotes from './quotes.json'
import { useState } from 'react';
import QuoteBox from './components/Quotes';
import Buttons from './components/Button';

function App() {
  
  // variable de la cual se obtendra de forma aleatoria las citas

  let randomQuote = Math.floor((Math.random() * 101) + 1);
  
  // variable inicial, aleatoria, en la cual estara nuestra cita

  let randomQuoteState = Math.floor((Math.random() * 20) + 1);

  // constate la cual se encargara de modificar el color
  const [color, setColor] = useState('yellow');

  // constante que se encargara de generar las citas 
  const [quote, setQuote] = useState(Quotes.quotes[randomQuoteState]);
  
  // función que se encarga de general los colores aleatoriamente valiendose de clases prediseñadas
  function HandleColor(){
    let color = Math.floor(Math.random()*5);
    if(color === 0){
      setColor('green');
    } else if(color === 1) {
      setColor('red');
    } else if(color === 2) {
      setColor('blue');
    } else if(color === 3) {
      setColor('orange');
    } else if(color === 4) {
      setColor('yellow');
    }
  }

  //constante encargada de renderizar las citas generadas anteriormente
  const getCitas = () => {setQuote(Quotes.quotes[randomQuote]); HandleColor()}

  // ejecución del la aplicación utilizando los recursos anteriores
  return (
    <div className="App">
      <header className = {`header ${color}`} >
        <div className="box">
          <QuoteBox quote={quote} color={color}/>
          <Buttons
          handle = {() => {getCitas()}} color = {color}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
