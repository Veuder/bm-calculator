const TypeOfBm = ({ bm, setBm, setData, hours }) => {
  const onOptionChange = (e) => {
    setBm(e.target.value)
    setData(JSON.parse(JSON.stringify(hours)))
  }
  return (
    <section className="type-of-bm">
      <fieldset>
        <legend>Выберите тип БМ</legend>
        <div className={`type-of-bm__item ${bm === 'bmHours' ? 'active' : ''}`}>
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

        <div
          className={`type-of-bm__item ${
            bm === 'bmModuleHours' ? 'active' : ''
          }`}
        >
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

        <div
          className={`type-of-bm__item ${
            bm === 'bmWithoutPromotionHours' ? 'active' : ''
          }`}
        >
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

        <div
          className={`type-of-bm__item ${
            bm === 'promotionHours' ? 'active' : ''
          }`}
        >
          <input
            type="radio"
            id="promotionHours"
            name="type"
            value="promotionHours"
            checked={bm === 'promotionHours'}
            onChange={onOptionChange}
          />
          <label htmlFor="promotionHours">Сопровождение</label>
        </div>
      </fieldset>
    </section>
  )
}

export default TypeOfBm
