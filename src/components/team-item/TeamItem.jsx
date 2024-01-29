import Input from '../UI/input/Input'

const TeamItem = ({ data, setData, member, bm }) => {
  function changeDataHours(value) {
    const newData = data
    setData(
      newData.map((element) => {
        if (element.id === member.id) {
          element[bm] = value
        }
        return element
      })
    )
  }
  return (
    <div className="team-item">
      <label htmlFor={member.id}>{member.name}</label>
      <Input
        type="number"
        value={data.filter((el) => el.id === member.id)[0][bm]}
        id={member.id}
        onChange={(e) => changeDataHours(e.target.value)}
      />
    </div>
  )
}

export default TeamItem
