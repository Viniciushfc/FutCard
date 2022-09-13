
import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';




function App() {

  const times = [{
    nome: 'É os guri',
    corPrimaria: '#57C278',
    corSegundaria: '#D9F7E9'
  },
  {
    nome: 'Parisanduíche',
    corPrimaria: '#82CFFA',
    corSegundaria: '#E8F8FF'
  },
  {
    nome: 'Seus Madrugas',
    corPrimaria: '#A6D157',
    corSegundaria: '#F0F8E2'
  },
  {
    nome: 'Hora do Rush',
    corPrimaria: '#E06B69',
    corSegundaria: '#FDE7E8'
  }]

  const [jogadores, setJogadores] = useState([])

  const jogadoresAdicionados = (jogador) => {
    setJogadores([...jogadores, jogador])
  }


  return (
    <div className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} 
      jogadoresAdicionados={jogador => jogadoresAdicionados(jogador)} />

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSegundaria={time.corSegundaria} 
      jogador={jogadores.filter(jogador => jogador.time === time.nome)}/>)}
      
    </div>

  );
}

export default App;
