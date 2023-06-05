export interface Movies {
    dates: object
    page: number
    results: Array<Results>
    total_pages: number
    total_results: number
}

export interface Results {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    inventory: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    price: number
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}