import { useState } from 'react';
import './app.css';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';

function App() {

  var [input, setInput] = useState('')
  var [cep, setCep] = useState({})

  async function handleSearch() {

    if(input === '') {
      alert("Preencha o campo com algum CEP.")
      return
    }

    try{
      var response = await api.get(`${input}/json`)
      setCep(response.data)
    } catch {
       alert("Engine obteve um erro ao buscar o CEP.")
       setInput("")
    }

  }

  return (
    <main className="App">

      <div className="container">
        <h1>Buscador CEP</h1>

        <div className="containerInput">
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button onClick={handleSearch}>
            <FiSearch size={25} color="#fff"/>
          </button>
        </div>
      </div>

      {Object.keys(cep).length > 1 && (
        <div className='content'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </div>
      )}
    </main>
  );
}

export default App;
