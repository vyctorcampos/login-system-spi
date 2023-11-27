import styled from "styled-components";

export const Title = styled.h2``;

export const Containerr = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
`;

export const Container = styled.div`
  padding: 1em;
  background: #6c63ff;
  width: 50vw;
  border-radius: 5px;

  & header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

export const Cadastro = styled.header`
  display: flex;
  justify-content: space-between;
  & form {
    display: flex;
    width: 100%;

    & input {
      margin-right: 0.5em;
    }
  }
`;

export const List = styled.div`
  margin-top: 0.5em;
  max-height: 60vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NameTask = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  font-weight: ${(props) => (props.checked ? "bold" : "0")};
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  padding: 1em;
  background-color: #519;
  border-radius: 3px;

  & :where(div, svg) {
    margin-left: 1em;
    cursor: pointer;
  }
`;
