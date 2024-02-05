import { useState } from 'react'
import AdditionalItem from '../additional-item/AdditionalItem'

const Additional = ({ data, setData, bm }) => {
  const [isLms, setIsLms] = useState(false)

  function handleConnectedChange() {
    if (document.querySelector('#lms input').checked) {
      setIsLms(true)
    } else {
      setIsLms(false)
    }
  }

  return (
    <section className="additional">
      <h2>Дополнительно</h2>
      <div className="additional__list">
        <AdditionalItem
          id={'lk-user'}
          text={'ЛК пользователя (классика)'}
          valuePercent={{
            frontendDev: 20,
            qa: 20,
          }}
          valueHours={{}}
          setData={setData}
          data={data}
          bm={bm}
          handleConnectedChange={handleConnectedChange}
          isLms={isLms}
        />

        <AdditionalItem
          id={'calculator'}
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
          id={'quiz'}
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
          id={'hard-menu'}
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
          id={'lms'}
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
          handleConnectedChange={handleConnectedChange}
        />
        <AdditionalItem
          id={'hard-client'}
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
          id={'urgent-project'}
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
