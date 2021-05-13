import entradas from '../../assets/Entradas.svg';

import { SumStyle } from './SumStyle';


export function Summary() {
  return (
    <SumStyle>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ entradas } alt="entradas" />
        </header>
      </div>
    </SumStyle>
  )
}