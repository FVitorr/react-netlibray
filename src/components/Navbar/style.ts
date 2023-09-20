import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 1fr 2fr 1fr; /* Divide em três colunas iguais */
  background-color: #333;
  color: #fff;
  padding: 1rem;

  > ul {
    list-style: none

    >li{
      font-size: 15px;
    }
  }
`;
