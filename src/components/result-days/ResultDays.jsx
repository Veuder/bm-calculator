const ResultDays = ({ data, bm }) => {
  const calculateDays = () => {
    let resultHours = 0
    data.forEach((element) => {
      if (element.separate === true) {
        resultHours += +element[bm]
      }
    })
    return Math.ceil(resultHours / 8)
  }
  return <h2 className="result-days">Итого дней: {calculateDays()}</h2>
}

export default ResultDays
