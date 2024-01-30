import Input from '../UI/input/Input'

const MonthField = ({ month, setMonth }) => {
  return (
    <section className="month-count">
      <div className="team-item">
        <label htmlFor="monthCount">Месяцев сопровождения: </label>
        <Input
          type="number"
          value={month}
          id="monthCount"
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
    </section>
  )
}

export default MonthField
