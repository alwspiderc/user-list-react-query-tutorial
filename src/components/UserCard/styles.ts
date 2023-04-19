import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 400px;
  border: 1px solid;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
`;

export const Imagem = styled.img`
  width: 100px;
  border-radius: 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  h3 {
    color: #141414;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #141414;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  
  :hover {
    background-color: #161616;
  }
`;
