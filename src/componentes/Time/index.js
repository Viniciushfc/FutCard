import Jogador from '../Jogador';
import './Time.css'


const Time = (props) => {
    return (
        props.jogador.length > 0  && <section className='time' style={{backgroundColor: props.corSegundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogador'>
            {props.jogador.map( jogador => <Jogador key={jogador.nome} nome={jogador.nome} funcao={jogador.funcao} imagem={jogador.imagem} corFundo={props.corPrimaria}/>)}
            </div>
        </section>

    )
}

export default Time;