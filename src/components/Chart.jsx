import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import {useSelector,useDispatch} from 'react-redux'
import {fetchCoronaDaily,fetchCorona} from '../redux/action'
import '../scss/chart.scss'
const Chart = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  React.useEffect(() => {
    dispatch(fetchCoronaDaily())
    dispatch(fetchCorona())
  },[])

  return (
    <div className="chart">
      {!state.error &&  state.country 
        ? <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgb(229, 156, 243)', 'rgb(156, 243, 156)', 'rgb(243, 156, 156)'],
                  data: [state.data.confirmed.value, state.data.recovered.value, state.data.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${state.country}`},
            }}
          />
        : Object.keys(state.dataDaily).length
          &&
            <Line
            data={{
              labels: state.dataDaily.map(({date}) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: state.dataDaily.map(data => data.confirmed),
                label: 'Infected',
                borderColor: 'rgb(229, 156, 243)',
                fill: true,
              }, {
                data: state.dataDaily.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgb(243, 156, 156)',
                fill: true,
              },  {
                data: state.dataDaily.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgb(156, 243, 156)',
                fill: true,
              },
              ],
            }}  
            />
      }
      
    </div>
  )
}

export default Chart
