'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import style from './page.module.css'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Nous avons rencontré un probleme lors du chargement de vos données</h2>
      <button
        className={style.btn_error}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Actualiser
        <span className={style.btn__bg}></span>
      </button>
    </div>
  )
}