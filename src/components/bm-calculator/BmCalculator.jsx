import TeamList from '../team-list/TeamList'
import { hours } from '../../data'
import { useState } from 'react'
import ResultHours from '../result-hours/ResultHours'
import TypeOfBm from '../type-of-bm/TypeOfBm'
import ResultDays from '../result-days/ResultDays'
const BmCalculator = () => {
  const [data, setData] = useState(hours)
  const [bm, setBm] = useState('bmHours')
  return (
    <>
      <TypeOfBm setBm={setBm} bm={bm} />
      <TeamList setData={setData} data={data} bm={bm} />
      <hr />
      <ResultHours data={data} bm={bm} />
      <ResultDays data={data} bm={bm} />
    </>
  )
}

export default BmCalculator
