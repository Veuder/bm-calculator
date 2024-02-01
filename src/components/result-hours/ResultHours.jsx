const ResultHours = ({ data, bm, month, isPromotion, isAdditional }) => {
  return (
    <section>
      <ul className="result-hours">
        {data.map((member) => {
          return (
            <li key={member.id}>
              {member.name + ': '}
              {isPromotion ? (
                <span>{member[bm] * month + ' часов'}</span>
              ) : isAdditional ? (
                <span>
                  {member[bm] +
                    ' + ' +
                    (member['additionalHours'] +
                      (member[bm] * member['additionalPercent']) / 100) +
                    ' = ' +
                    (+member[bm] +
                      +member['additionalHours'] +
                      (member[bm] * member['additionalPercent']) / 100) +
                    ' часов'}
                </span>
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
