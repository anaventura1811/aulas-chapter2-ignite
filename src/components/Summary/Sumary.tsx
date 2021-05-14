import React, { useContext } from 'react';
import entradas from '../../assets/Entradas.svg';
import saidas from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { SumStyle } from './SumStyle';


export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <SumStyle>
    
      <div>
        <header>
          <p>Entradas</p>
          <img src={ entradas } alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ saidas } alt="saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={ total } alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </SumStyle>
  )
}