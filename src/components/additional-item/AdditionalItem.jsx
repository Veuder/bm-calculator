import { useEffect, useState } from 'react'

const AdditionalItem = ({
  id,
  text,
  valuePercent,
  valueHours,
  data,
  setData,
  handleConnectedChange,
  isLms,
}) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (id === 'lk-user' && isLms && checked) {
      setChecked(false)
      handleChange(false)
    }
  }, [isLms])
  // if (isLms) {
  //   console.log(isLms)
  //   console.log('user disable')
  //   setChecked(false)
  // }
  function handleChange(isChecked) {
    setChecked(isChecked)
    if (id === 'lms') {
      handleConnectedChange()
    }

    for (let key in valuePercent) {
      addAdditional(key, valuePercent[key], 'additionalPercent', isChecked)
    }
    for (let key in valueHours) {
      addAdditional(key, valueHours[key], 'additionalHours', isChecked)
    }
  }

  function addAdditional(key, value, unit, isChecked) {
    const newData = data
    setData(
      newData.map((element) => {
        if (element.id === '' + key) {
          if (!element[unit]) {
            element[unit] = 0
          }
          isChecked ? (element[unit] += value) : (element[unit] -= value)
        }
        return element
      })
    )
  }

  return (
    <div className="pretty p-switch p-fill" id={id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
        disabled={isLms ? true : false}
      />
      <div className="state">
        <label>{text}</label>
      </div>
    </div>
  )
}

export default AdditionalItem
