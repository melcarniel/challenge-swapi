import React, { Fragment } from 'react'
import starWars from './starWars.gif'

const Spinner = () => {
  return (
    <Fragment>
      <img src={starWars} alt="Loading..." style={{ width: '200', margin: 'auto', display: 'block', marginTop: '10rem'}} />
    </Fragment>
  )
}

export default Spinner;