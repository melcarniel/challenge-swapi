import React, { useReducer } from 'react';
import axios from 'axios';
import SwapiContext from './swapiContext';
import SwapiReducer from './swapiReducer';
import { GET_MASTER, SET_LOADING, CLEAN_MASTER } from '../types';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const SwapiState = props => {

  const initialState = {
    name: '',
    loading: false,
    color: '',
    background: ''
  }

  const [state, dispatch] = useReducer(SwapiReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getRequest = async (number) => {
    
    axios.interceptors.request.use(function (config) {

      config.metadata = { startTime: new Date()}
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    const res = axios.get(`${PROXY_URL}https://swapi.dev/api/people/${number}`)
 
    axios.interceptors.response.use((response) => {

        response.config.metadata.endTime = new Date()
        response.duration = response.config.metadata.endTime - response.config.metadata.startTime
        
        return response;
        
      }, function (error) {
        error.config.metadata.endTime = new Date();
        error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
        return Promise.reject(error);
      });

      return res;
  }

  const getMaster = async () => {
    setLoading();
        
    const luke = await getRequest(1);
    const darth = await getRequest(4);
    
    if(luke.duration > darth.duration){
      dispatch({
        type: GET_MASTER,
        payload: darth.data
      })
    } else {
      dispatch({
        type: GET_MASTER,
        payload: luke.data
      })
    }
     
  }

  const submitAgain = async () => {
    setLoading();
    cleanMaster();
    getMaster();
  }

  const cleanMaster = () => dispatch({ type: CLEAN_MASTER });

  return <SwapiContext.Provider
    value={{
      name: state.name,
      loading: state.loading,
      background: state.background,
      color: state.color,
      getMaster,
      cleanMaster,
      submitAgain
    }}
  
  >
    {props.children}

  </SwapiContext.Provider>
}

export default SwapiState;