import React, { useState } from 'react';
import Modal from 'react-modal';
import entrada from '../../assets/Entradas.svg';
import saidas from '../../assets/Saidas.svg';
import closeImg from '../../assets/close.svg';
import { ModalStyle, TransactionTypeContainer, Button } from './ModalStyles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [type, setType] = useState('deposit');

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

      <ModalStyle>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder='Título'
        />
        <input
          type="number"
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <Button
           type="button"
          //  className={type === 'deposit' ? 'active' : ''}
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
        />
        <button type="submit">
          Cadastrar
        </button>

      </ModalStyle>
    </Modal>
  )
}

export default NewTransactionModal;
