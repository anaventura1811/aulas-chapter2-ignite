import styled from 'styled-components';

export const SumStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Para repetir as caixas de mesmo tamanho num grid*/
  gap: 2rem;
  margin-top: -10rem; /* Margin top negativa para colocar as divs mais acima, pegando um pouco do header*/

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }

`;