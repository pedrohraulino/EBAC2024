import { useState } from 'react';
import Input from './components/input/input';

function App() {
    const [altura, setAltura] = useState<string>("");
    const [peso, setPeso] = useState<string>("");
    const [imc, setIMC] = useState<number | null>(null);
    const [classificacao, setClassificacao] = useState<string>("");

    function calculaIMC() {
        const alturaNumerica = parseFloat(altura) / 100;
        const pesoNumerico = parseFloat(peso);

        if (alturaNumerica > 0 && pesoNumerico > 0) {
            const imcCalculado = pesoNumerico / (alturaNumerica * alturaNumerica);
            setIMC(imcCalculado);
            if (imcCalculado < 18.5) {
                setClassificacao("Abaixo do peso");
            } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
                setClassificacao("Peso normal");
            } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
                setClassificacao("Sobrepeso");
            } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
                setClassificacao("Obesidade grau 1");
            } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
                setClassificacao("Obesidade grau 2");
            } else {
                setClassificacao("Obesidade grau 3");
            }
        } else {
            setIMC(null);
            setClassificacao("");
        }
    }

    return (
        <div className='container'>
            <h1>Calculadora de IMC</h1>
            <Input
                className="inputs"
                label="Altura (em cm)"
                valor={altura}
                onChange={setAltura}
                placeholder="Ex: 180"
            />
            <Input
                label="Peso (em kg)"
                valor={peso}
                onChange={setPeso}
                placeholder="Ex: 70.5"
            />
            <button onClick={calculaIMC}>Calcular IMC</button>

            {imc !== null && (
                <div>
                    <p>Seu IMC é: <strong>{imc.toFixed(2)}</strong></p>
                    <p>Classificação: <strong>{classificacao}</strong></p>
                </div>
            )}
        </div>
    );
}

export default App;
