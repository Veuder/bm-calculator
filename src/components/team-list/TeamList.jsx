import TeamItem from '../team-item/TeamItem'
const TeamList = ({ data, setData, bm }) => {
  return (
    <section className="team-list">
      {data.map((member) => (
        <TeamItem
          member={member}
          key={member.id}
          setData={setData}
          data={data}
          bm={bm}
        />
      ))}
    </section>
  )
}

export default TeamList
