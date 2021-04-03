import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchCorona,onSetCountry} from '../redux/action'
import classnames from 'classnames'
import '../scss/country.scss'
const CountryPicker = () => {
  const dispatch = useDispatch()
  const [country,setCountry] = React.useState('')
  const error = useSelector(state => state.error)
  const onFind = () => {
    dispatch(fetchCorona(country))
    dispatch(onSetCountry(country))
  }
  const onEnter =  e => {
    if(e.code === 'Enter'){
      dispatch(fetchCorona(country))
      dispatch(onSetCountry(country))
    }    
  }

  const onInputCountry = (e) => {
    setCountry(e.target.value)  
  }

  return (
    <div className="country">
      <div>
        {error && <label className="error__message" htmlFor="country">Enter a correct country</label>}
        <br/>
        <input type="text" name="country" value={country} onKeyDown={onEnter} onChange={onInputCountry} className={classnames('country__input',{'error': error})}/>
      </div>
      <button className="country__btn" onClick={onFind}>find</button>
    </div>
  )
}

export default CountryPicker
