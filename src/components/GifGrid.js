import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])
  // Primer argumento: lo que se ejecuta; segundo argumento: cuando se ejecuta?
  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url =
      'http://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=3tVioBLznMcTZUnTg0NWrSzXCNuPfaer'
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    console.log(gifs)
    setImages(gifs)
  }

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            {...img} // Así se envían cada elemento de img como propiedades independientes
          />
        ))}
      </div>
    </>
  )
}
