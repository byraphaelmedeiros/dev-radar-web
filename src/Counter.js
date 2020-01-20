import React, { useState } from 'react';

// Estes sao os 3 conceitos principais do React:
// Componente: Blocos isolados de HTML, CSS e JS, o qual não interferem no restante da aplicação;
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (lembrar: IMUTABILIDADE)


function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default Counter;
