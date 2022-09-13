import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.jogadoresAdicionados({
            nome,
            funcao,
            imagem,
            time
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do card do jogador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Função" placeholder="Digite sua função" valor={funcao} aoAlterado={valor => setFuncao(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Times" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;