import './Jogador.css'

const Jogador = (props) => {

    return(<div className='jogador'>
        <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
            <img src={props.imagem} alt={props.nome} />
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.funcao}</h5>
        </div>
    </div>
    )
}

export default Jogador