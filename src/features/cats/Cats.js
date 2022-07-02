import React from 'react';
import { useSelector } from 'react-redux';
import { selectCats } from './catsSlice';
import styles from './Cats.module.css';

export function Cats() {
  const { cats, loading, error } = useSelector(selectCats)

  if (loading) return <p>Loading cats...</p>
  if (error) return <p>Cannot display cats...</p>

  return (
    <div>
      {!cats.length
        ? <h1>Select a category</h1>
        : <>
            <h1>The cats!</h1>
            <div>
              {cats.map(cat => <img key={cat.id} className={styles.image} src={cat.url} alt={cat.url} />)}
            </div>
          </>
      }
    </div>
  )
}
