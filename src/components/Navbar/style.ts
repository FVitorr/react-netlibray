import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr 1fr; /* Divide em três colunas iguais */
  background-color: #333;
  color: #fff;

  >h1{
    padding-left: 5rem;
  }

  > ul {
    display: flex;
    justify-content: baseline;
    align-items: center;
    gap: 1rem;
    list-style: none;
    text-decoration: underline;
    color: #e5e5e5;
    >li{
      font-size: 15px;
    }
  }
`;
