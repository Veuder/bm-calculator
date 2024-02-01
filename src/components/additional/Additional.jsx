import AdditionalItem from '../additional-item/AdditionalItem'

const Additional = ({ data, setData, bm }) => {
  return (
    <section className="additional">
      <h2>Дополнительно</h2>
      <div className="additional__list">
        <AdditionalItem
          text={'ЛК пользователя (классика)'}
          valuePercent={{
            frontendDev: 20,
            qa: 20,
          }}
          valueHours={{}}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'Калькулятор (простой)'}
          valuePercent={{
            frontendDev: 10,
            qa: 10,
            manager: 10,
          }}
          valueHours={{}}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'Квиз/тесты (простые)'}
          valuePercent={{
            frontendDev: 10,
            qa: 10,
            manager: 10,
          }}
          valueHours={{}}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'Сложное меню и категории'}
          valuePercent={{
            frontendDev: 10,
            qa: 10,
            manager: 10,
          }}
          valueHours={{}}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'LMS (классика)'}
          valuePercent={{
            frontendDev: 40,
            qa: 40,
            manager: 40,
            content: 40,
          }}
          valueHours={{
            leadDev: 20,
          }}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'Сложный клиент'}
          valuePercent={{
            frontendDev: 5,
            manager: 10,
          }}
          valueHours={{
            leadDev: 15,
          }}
          setData={setData}
          data={data}
          bm={bm}
        />
        <AdditionalItem
          text={'Срочный проект'}
          valuePercent={{
            frontendDev: 20,
            manager: 20,
            qa: 20,
            content: 20,
          }}
          valueHours={{
            leadDev: 20,
          }}
          setData={setData}
          data={data}
          bm={bm}
        />
      </div>
    </section>
  )
}

export default Additional
