const initialState = {
  data: {},
  dataDaily: {},
  country: '',
  error: ''
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        error: '',
        data: action.payload
      }
    case 'SET_DATA_DAILY':
      return {
        ...state,
        error: '',
        dataDaily: action.payload
      }
    case 'SET_COUNTRY':
      return {
        ...state,
        error: '',
        country: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: 'error'
      }
    default:
      return state;
  }

}

export default reducer