import { DashStyle } from './DashStyle';
import { Summary } from './Summary/Sumary';
import { TransactionsTable } from './TransactionsTable/TransactionsTable';

export function Dashboard() {
  return (
    <DashStyle>
      <Summary />
      <TransactionsTable />
    </DashStyle>
  );
}