import React from 'react'
import MovieDetail from '~/components/ui/movie-detail'
import { POSTER_BASEURL } from '~/constants/tmdb'
import { sendRequestTMDB } from '~/lib/tmdb'
import { MovieType } from '~/types/movie'
// import { POSTER_BASEURL } from '~/constants/tmdb'
// import { sendRequestTMDB } from '~/lib/tmdb'
// import { MovieType } from '~/types/movie'

type Props = {
    params: {
        movieId: any
    }
}

export async function generateMetadata({params}: Props) {
    const response = await sendRequestTMDB(`/movie/${await params.movieId}`)
    const data: MovieType = await response?.data

    return {
        title: data.title ?? data.original_title,
        description: data.overview,
        openGraph: {
            title: data.title ?? data.title,
            images: POSTER_BASEURL + data.poster_path
        }
    }
}

export default function Page({params}: Props) {
  return (
    params?.movieId && (
        <MovieDetail movieId={params.movieId} />
    )
  )
}