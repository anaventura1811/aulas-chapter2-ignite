import { DashStyle } from './DashStyle';
import { Summary } from './Summary/Sumary';
import { TransactionsTable } from './TransactionsTable/TransactionsTable';

export function Dashboard() {

  // contexto serve para compartilhamento de estado entre diferentes componentes
  // independente do nível hierárquico dos componentes
  
  return (
    <DashStyle>
      <Summary />
      <TransactionsTable />
    </DashStyle>
  );
}