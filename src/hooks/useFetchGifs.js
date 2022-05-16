import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  // Primer argumento: lo que se ejecuta; segundo argumento: cuándo re-renderizar (cuando cambia el argumento, en este caso category)
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      })
    })
  }, [category])

  return state //{data: [], loading: true}
}
