import { useEffect, useState } from 'react'

const AdditionalItem = ({ text, valuePercent, valueHours, data, setData }) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(false)
  }, [])
  function handleChange(event) {
    let isChecked = event.target.checked
    setChecked(isChecked)
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
    <div className="pretty p-switch p-fill">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className="state">
        <label>{text}</label>
      </div>
    </div>
  )
}

export default AdditionalItem
