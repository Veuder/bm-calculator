const ResultHours = ({ data, bm }) => {
  return (
    <section>
      <ul className="result-hours">
        {data.map((member) => (
          <li key={member.id}>{member.name + ': ' + member[bm] + ' часов'}</li>
        ))}
      </ul>
    </section>
  )
}

export default ResultHours
