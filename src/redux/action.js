import axios from 'axios'

export const fetchCorona = (country) => async (dispatch)  => {
  let url = 'https://covid19.mathdro.id/api';
  if(country){
    url = `https://covid19.mathdro.id/api/countries/${country}`
  }
  try {
    await axios.get(url)
    .then(({data: {confirmed,recovered,deaths,lastUpdate}}) => {
      return dispatch(setData({confirmed, recovered, deaths, lastUpdate})) 
    })
  } catch (e) { 
    dispatch(onError())
   }
}

export const fetchCoronaDaily = () => async (dispatch)  => {
  try {
    await axios.get('https://covid19.mathdro.id/api/daily')
    .then(({data}) => {
      const res = data.map(({totalConfirmed,totalRecovered,deaths: {total},reportDate}) => ({
        confirmed: totalConfirmed,
        totalRecovered,
        deaths: total,
        date : reportDate
      }))
      return dispatch(setDataDaily(res))
      
    })
  } catch (e) { throw e }
}

export const onError = () => ({
  type: 'SET_ERROR'
})

export const onSetCountry = data => ({
  type: 'SET_COUNTRY',
  payload: data
})

export const setDataDaily = data => ({
  type: 'SET_DATA_DAILY',
  payload: data
})

export const setData = data => ({
  type: 'SET_DATA',
  payload: data
})