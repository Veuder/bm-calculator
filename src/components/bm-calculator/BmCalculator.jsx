import TeamList from '../team-list/TeamList'
import { hours } from '../../data'
import { useState } from 'react'
import ResultHours from '../result-hours/ResultHours'
import TypeOfBm from '../type-of-bm/TypeOfBm'
import ResultDays from '../result-days/ResultDays'
import MonthField from '../month-field/MonthField'
const BmCalculator = () => {
  const [data, setData] = useState(hours)
  const [bm, setBm] = useState('bmHours')
  const [month, setMonth] = useState(9)
  const isPromotion = bm === 'promotionHours'
  return (
    <>
      <TypeOfBm setBm={setBm} bm={bm} />
      <TeamList setData={setData} data={data} bm={bm} />
      {isPromotion && <MonthField month={month} setMonth={setMonth} />}

      <hr />
      <ResultHours
        data={data}
        bm={bm}
        month={month}
        isPromotion={isPromotion}
      />
      <ResultDays data={data} bm={bm} month={month} isPromotion={isPromotion} />
    </>
  )
}

export default BmCalculator
