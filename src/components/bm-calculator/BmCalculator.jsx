import TeamList from '../team-list/TeamList'
import { hours } from '../../data'
import { useState } from 'react'
import ResultHours from '../result-hours/ResultHours'
import TypeOfBm from '../type-of-bm/TypeOfBm'
import ResultDays from '../result-days/ResultDays'
import MonthField from '../month-field/MonthField'
import Additional from '../additional/Additional'
const BmCalculator = () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(hours)))
  const [bm, setBm] = useState('bmHours')
  const [month, setMonth] = useState(9)
  const isPromotion = bm === 'promotionHours'
  const isAdditional = bm === 'bmHours' || bm === 'bmWithoutPromotionHours'

  return (
    <>
      <TypeOfBm setBm={setBm} bm={bm} setData={setData} hours={hours} />
      <TeamList setData={setData} data={data} bm={bm} />
      {isPromotion && <MonthField month={month} setMonth={setMonth} />}
      <hr />
      {isAdditional && <Additional setData={setData} data={data} bm={bm} />}
      {isAdditional && <hr />}
      <ResultHours
        data={data}
        bm={bm}
        month={month}
        isPromotion={isPromotion}
        isAdditional={isAdditional}
      />
      <ResultDays data={data} bm={bm} month={month} isPromotion={isPromotion} />
    </>
  )
}

export default BmCalculator
