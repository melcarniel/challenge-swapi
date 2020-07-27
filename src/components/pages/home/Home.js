import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  useEffect(() => {
    document.body.style.background = "#E5E5E5";
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="container">
        <p className="title">Welcome to <span>iClinic</span></p>
        <p className="title-challenge">FRONTEND CHALLENGE</p>
        <Link to="/result" className="btn-home text-link">START</Link>
      </div>
    </Fragment>
  )
}

export default Home;
