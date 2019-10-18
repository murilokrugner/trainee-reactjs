import React, { useState, useEffect } from "react";

// import { Container } from './styles';

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Contagem";

    return () => (document.title = "Contagem");
  }, [count]);

  return (
    <div>
      <strong key={count}>{count}</strong>
      <br />
      <button onClick={() => setCount(count + 1)} type="button">
        Adicionar
      </button>
    </div>
  );
}
