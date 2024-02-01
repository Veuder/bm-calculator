const ResultDays = ({ data, bm, isPromotion }) => {
  const calculateDays = () => {
    let resultHours = 0
    data.forEach((element) => {
      if (element.separate === true) {
        resultHours +=
          +element[bm] +
          (+element[bm] * element['additionalPercent']) / 100 +
          element['additionalHours']
      }
    })
    return isPromotion ? 0 : Math.ceil(resultHours / 8)
  }
  return <h2 className="result-days">Итого дней: {calculateDays()}</h2>
}

export default ResultDays
