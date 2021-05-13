import { useEffect } from 'react';
import { api } from '../../services/api';
import { TransactionStyles } from './TransactionStyles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then((res) => console.log(res.data));
  }, []);

  return (
    <TransactionStyles>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/03/2021</td>
          </tr>
          <tr>
            <td>Moradia</td>
            <td className="withdraw">- R$5.000</td>
            <td>Aluguel</td>
            <td>20/03/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionStyles>
  )
}