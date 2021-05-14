import Modal from 'react-modal';
import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import NewTransactionModal from './components/NewTransactionModal/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

 function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  // Sempre que precisar que uma informação seja acessada por outros componentes, ideal é passar
  // como props a partir de um componente pai

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <GlobalStyle />
    </>
  );
}

