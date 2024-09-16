import React from 'react';

function Tabela({ dados }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Disponível</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
            <td>{produto.disponivel ? 'Sim' : 'Não'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;