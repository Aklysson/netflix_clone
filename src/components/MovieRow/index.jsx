import * as C from './style'

export function MovieRow ({title, content}) {
    return (
        <C.Container>
            <h1>{title}</h1>
            {
                content.results.map((e) => (
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`} alt="" />
                    ))
            }
            
            
        </C.Container>
    )
}