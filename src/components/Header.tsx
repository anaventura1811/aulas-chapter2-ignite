import logo from '../assets/Logo.svg';
import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Content } from './styles';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

 function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
          <img src={logo} alt="dtmoney" />
          <button
            type="button"
            onClick={handleOpenNewTransactionModal}
          >
            Nova transação
          </button>
          <Modal isOpen={isNewTransactionModalOpen}>
            <h2>Cadastrar transação</h2>
          </Modal>
      </Content>
    </Container>
  )
}