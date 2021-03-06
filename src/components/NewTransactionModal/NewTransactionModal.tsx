import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import entrada from '../../assets/Entradas.svg';
import saidas from '../../assets/Saidas.svg';
import closeImg from '../../assets/close.svg';
import { ModalStyle, TransactionTypeContainer, Button } from './ModalStyles';
import {  useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type
    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
 
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <ModalStyle onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <Button
           type="button"
           onClick={() => { setType('deposit')}}
           isActive={type === 'deposit'}
           activeColor="green"
          >
            <img src={entrada} alt="Entradas" />
            <span>Entrada</span>
          </Button>

          <Button
           type="button"
           onClick={() => { setType('withdraw')}}
           isActive={type === 'withdraw'}
           activeColor="red"
          >
            <img src={saidas} alt="Saídas" />
            <span>Saída</span>
          </Button>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>

      </ModalStyle>
    </Modal>
  )
}

export default NewTransactionModal;
