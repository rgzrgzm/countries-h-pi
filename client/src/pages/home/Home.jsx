import React from 'react'
import Form from '../../components/form/Form'
import styles from './home.module.css'
const Home = () => {
  return (
    <div className={styles.home__container}>
      <h1>Home</h1>
      <Form />
    </div>
  )
}

export default Home