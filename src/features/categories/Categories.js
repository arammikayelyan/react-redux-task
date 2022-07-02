import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, selectCategories } from "./categoriesSlice";
import { fetchByCategoryID } from "../cats/catsSlice";
import styles from "./Categories.module.css";

export function Categories() {
  const { loading, error, categories } = useSelector(selectCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  function getByCategory(categoryID) {
    console.log(categoryID)
    dispatch(fetchByCategoryID(categoryID))
  }

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>Cannot display categories...</p>

  return (
    <div className={styles.sidebar}>
      <h1>Categories</h1>
      {categories.length &&
        <ul>
          {categories.map(c => <li key={c.id} onClick={() => getByCategory(c.id)}>{c.name}</li>)}
        </ul>
      }
    </div>
  )
}
