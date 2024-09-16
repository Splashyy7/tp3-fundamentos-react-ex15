import React from 'react';
import Tabela from './Tabela.jsx';

const dados = [
  { id: 1, nome: 'Produto A', preco: 10, disponivel: true },
  { id: 2, nome: 'Produto B', preco: 20, disponivel: false },
  { id: 3, nome: 'Produto C', preco: 30, disponivel: true },
];

function App() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Tabela dados={dados} />
    </div>
  );
}

export default App;