import logo from '../assets/Logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
          <img src={logo} alt="dtmoney" />
          <button type="button">
            Nova transação
          </button>
      </Content>
    </Container>
  )
}