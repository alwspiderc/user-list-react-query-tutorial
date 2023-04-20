import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    padding-top: 20px;
    padding-bottom: 10px;
    color: #fff;
  }

  .loading {
    color: #fff;
  }
  .error {
    color: red;
  }
`;