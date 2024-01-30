const ResultHours = ({ data, bm, month, isPromotion }) => {
  return (
    <section>
      <ul className="result-hours">
        {data.map((member) => {
          return (
            <li key={member.id}>
              {member.name + ': '}
              {isPromotion ? (
                <span>{member[bm] * month + ' часов'}</span>
              ) : (
                <span>{member[bm] + ' часов'}</span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ResultHours
