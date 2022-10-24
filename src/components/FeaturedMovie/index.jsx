import * as C from './style'

export function FilmeDestaque({item}){
    return (
        <C.Container>
            <img src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`} alt="" />
        </C.Container>
    )
}