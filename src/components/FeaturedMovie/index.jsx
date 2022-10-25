import * as C from './style'

export function FilmeDestaque({item}){
    let vote = item.vote_average.toFixed(1)
    let data = new Date(item.first_air_date)
    return (
        <C.Container>
            <C.Img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />            
            <C.Text>
                <h2>{item.name}</h2>
                <div className="infos">
                    <p>{vote}</p>
                    <p>{data.getFullYear()}</p>
                    <p>Temporadas: {item.number_of_seasons}</p>
                </div>
                {item.overview}
                <div className="a">

                    <button>Watch</button>
                    <button>Minhas Lista</button>
                </div>
                Generos
            </C.Text>
        </C.Container>
    )
}