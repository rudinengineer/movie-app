"use server"
import React from 'react'
import TvDetail from '~/components/ui/tv-detail'
import { POSTER_BASEURL } from '~/constants/tmdb'
import { sendRequestTMDB } from '~/lib/tmdb'
import { MovieType } from '~/types/movie'

type Props = {
    params: {
        movieId: any
    }
}

export async function generateMetadata({params}: Props) {
    const response = await sendRequestTMDB(`/tv/${await params.movieId}`)
    const data: MovieType = await response?.data

    return {
        title: data.name ?? data.original_name,
        description: data.overview,
        openGraph: {
            title: data.name ?? data.original_name,
            images: POSTER_BASEURL + data.poster_path
        }
    }
}

export default function Page({params}: Props) {

  return (
    params?.movieId && (
        <TvDetail movieId={params.movieId} />
    )
  )
}