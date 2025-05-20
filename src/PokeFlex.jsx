import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './PokeFlex.css'

const PokeFlex = () => {
    return (
        <div>
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />

        </div>
    )
}
export default PokeFlex