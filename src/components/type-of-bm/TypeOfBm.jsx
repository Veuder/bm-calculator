const TypeOfBm = ({ bm, setBm }) => {
  const onOptionChange = (e) => {
    setBm(e.target.value)
  }
  return (
    <section className="type-of-bm">
      <fieldset>
        <legend>Выберите тип БМ</legend>
        <div className="type-of-bm__item">
          <input
            type="radio"
            id="bmHours"
            name="type"
            value="bmHours"
            checked={bm === 'bmHours'}
            onChange={onOptionChange}
          />
          <label htmlFor="bmHours">Бренд-медиа</label>
        </div>

        <div className="type-of-bm__item">
          <input
            type="radio"
            id="bmModuleHours"
            name="type"
            value="bmModuleHours"
            checked={bm === 'bmModuleHours'}
            onChange={onOptionChange}
          />
          <label htmlFor="bmModuleHours">Бренд-медиа по модулю</label>
        </div>

        <div className="type-of-bm__item">
          <input
            type="radio"
            id="bmWithoutPromotionHours"
            name="type"
            value="bmWithoutPromotionHours"
            checked={bm === 'bmWithoutPromotionHours'}
            onChange={onOptionChange}
          />
          <label htmlFor="bmWithoutPromotionHours">
            Бренд-медиа без ведения
          </label>
        </div>
      </fieldset>
    </section>
  )
}

export default TypeOfBm
