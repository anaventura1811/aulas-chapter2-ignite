import styled from 'styled-components';

export const SumStyle = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr); /* Para repetir as caixas de mesmo tamanho num grid*/
 gap: 2rem;
 margin-top: -10rem; /* Margin top negativa para colocar as divs mais acima, pegando um pouco do header*/
`;