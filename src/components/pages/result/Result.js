import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../spinner/Spinner';
import { Helmet } from 'react-helmet'
import './Result.css'; 
import darthVader from '../../../images/darth-vader.png';
import luke from '../../../images/luke.png';
import SwapiContext from '../../../context/swapi/swapiContext';

const Result = () => {

  const swapiContext = useContext(SwapiContext);
  const { name, getMaster, loading,  color, background, submitAgain } = swapiContext;
  
  useEffect(() => {
    getMaster();
    // eslint-disable-next-line
  }, []);

  
  
  return (
     loading ? <Spinner /> :  
    <Fragment>
      <Helmet bodyAttributes={{style: `background-color : ${background}`}}/>
      <Link to='/' className="back text-link">
        <i className="fas fa-arrow-left" style={{color: color}}></i> <span className="back-span" style={{color: color}}>back</span> 
      </Link>
      <div className="container">
        <button
          onClick={submitAgain} 
          style={{ background: `${color}`, color: `${background}` }}
          className="btn-result">choose your path again, Padawan</button>
        <img src={name === 'Darth Vader' ? darthVader: luke} className="round-img" alt=""></img>
        <p style={{color: color}} className="name-result">Your master is <span>{name}</span></p>
      </div>
     
    </Fragment>
  )
}

export default Result;