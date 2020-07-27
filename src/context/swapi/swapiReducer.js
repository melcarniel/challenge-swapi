import { GET_MASTER, SET_LOADING, CLEAN_MASTER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MASTER:
      return {
        ...state,
        name: action.payload.name,
        color: action.payload.name === 'Darth Vader' ? '#FFFFFF': '#2A2A2A',
        background: action.payload.name === 'Darth Vader' ? '#2B2B2B': '#FBFE63',
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAN_MASTER:
      return {
        ...state,
        color: '',
        background: '',
        name: ''
      }
    default:
      return state;
  }
}