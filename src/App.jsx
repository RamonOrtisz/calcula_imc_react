import { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');


  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const calculoIMC = peso / (alturaMetros * alturaMetros);
      setImc(calculoIMC.toFixed(2));

      if (calculoIMC < 18.5) {
        setClassificacao('Magreza');
      } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        setClassificacao('Normal');
      } else if (calculoIMC >= 25.0 && calculoIMC <= 29.9) {
        setClassificacao('Sobrepeso');
      } else if (calculoIMC >= 30.0 && calculoIMC <= 39.9) {
        setClassificacao('Obesidade');
      } else {
        setClassificacao('Obesidade Grave');
      }
    }
  };
  return (
    <div className="App" >
      <div className='form'>
        <h1 className='title'>Calculadora IMC</h1>

        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>

        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>

        <button onClick={calcularIMC}>Calcular IMC</button>

      </div>
        {imc && (
          <div>
            <h2 className='resultado'>Seu IMC: {imc}</h2>
            <p className='class'>Classificação: {classificacao}</p>
          </div>
        )}
    </div>
  );
}

export default App;