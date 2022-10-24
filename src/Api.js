const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = '39b8a19e7085dd4df350d4d65cc2f39c'


const basicFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const response = await req.json()
    return response
}

export default {
    getHomeList: async() =>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Love',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'Documentaries',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)

            },
        ]
    },
        getMovie: async(id,type) => {
            fetch(`${API_BASE}${API_KEY}`)
        },
}