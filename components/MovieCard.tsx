// components/MovieCard.tsx
'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, Share2, Heart } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

type Movie = {
  title: string
  info: string
  description: string
}

const backgroundMap: { [key: string]: string } = {
  'Blade Runner':
    'http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg',
  'Back to the Future':
    'http://www.blastr.com/sites/blastr/files/back-to-the-future-part-ii-original.jpg',
  Akira:
    'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/58d86b3db3db2b57ce8f2986/1490578241899/?format=2500w',
}

const MovieCard: FC<Movie> = ({ title, info, description }) => {
  const bg = backgroundMap[title]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[800px] mx-auto my-12 rounded-lg shadow-xl relative overflow-hidden bg-cover bg-no-repeat min-h-[300px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-black/80 to-black/90 sm:bg-gradient-to-b sm:via-black/80 sm:to-black/90 rounded-lg" />
      <div className="relative z-10 p-4 sm:p-6 flex flex-col sm:flex-row justify-between h-full">
        <div className="flex flex-col gap-3 text-white max-w-md sm:ml-auto">
          <div>
            <h1 className="text-2xl font-bold opacity-75">{title}</h1>
            <h4 className="uppercase text-sm tracking-widest text-blue-400 opacity-60 font-semibold">
              {info}
            </h4>
          </div>
          <p className="text-sm font-light opacity-85">{description}</p>
          <button className="mt-auto text-white border-2 border-white px-6 py-2 hover:border-blue-400 hover:text-blue-400 transition-all">
            <PlayCircle className="inline mr-2 mb-1" size={20} /> Watch Trailer
          </button>
        </div>
        <div className="absolute top-4 left-4 flex gap-3 text-white opacity-40 hover:opacity-100 transition">
          <Share2 className="hover:text-blue-400" />
          <Heart className="hover:text-blue-400" />
        </div>
      </div>
    </motion.div>
  )
}

export default MovieCard
