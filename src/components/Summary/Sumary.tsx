import React from 'react';
import entradas from '../../assets/Entradas.svg';
import saidas from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { SumStyle } from './SumStyle';


export function Summary() {
  const { transactions } = useTransactions();
  
  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount
  //   }
  //   return acc;
  // }, 0)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <SumStyle>
    
      <div>
        <header>
          <p>Entradas</p>
          <img src={ entradas } alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ saidas } alt="saídas" />
        </header>
        <strong>- 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={ total } alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </SumStyle>
  )
}