import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { MdCheck, MdDelete } from 'react-icons/md';
import { Container, Cadastro, List, ListItem, NameTask, Containerr } from './styles';

const Home = () => {
  const [tarefa, SetTarefa] = useState('');
  const [atualizagrid, setAtualizagrid] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('Dados')) ?? []);

  useEffect(() => {
    const DadosGrid = JSON.parse(localStorage.getItem('Dados')) ?? [];
    setData(DadosGrid);
  }, [atualizagrid])

  function handleSalvar(event) {
    event.preventDefault();
    const dados = {
      "nome": tarefa,
      "checked": false
    }

    const dadosArray = [...data, dados];
    setData(dadosArray);
    localStorage.setItem('Dados', JSON.stringify(dadosArray));
    event.target.reset();
  }

  function handleExcluir(index) {
    const dadosExcluido = data
    dadosExcluido.splice(index, 1);
    localStorage.setItem('Dados', JSON.stringify(dadosExcluido));
    setAtualizagrid(!atualizagrid);
  }

  function handleConcluir(index){
    const dadosAlterar = data;
    dadosAlterar[index].checked = !dadosAlterar[index].checked

    localStorage.setItem('Dados', JSON.stringify(dadosAlterar));
    setAtualizagrid(!atualizagrid);
  }
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Containerr>
      <Container>
      <header>
        <h1>To Do List</h1>
      </header>
      <Cadastro>
        <form onSubmit={handleSalvar}>
          <input type="text" placeholder='Descreva sua tarefa' onChange={e => SetTarefa(e.target.value)} />
          <button type='submit'>Incluir</button>
        </form>
      </Cadastro>
      <List>
        {data.map((dado, index) => {
          return (
            <ListItem key={index}>
              <NameTask checked={dado.checked}>{dado.nome}</NameTask>
              <div>
                <MdCheck size={24} color='#00ff1f' onClick={() => handleConcluir(index)} />
                <MdDelete size={24} color='#ff0000' onClick={() => handleExcluir(index)} />
              </div>
            </ListItem>
          )
        })}
      </List>
    </Container>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </Containerr>
  );
};

export default Home;
