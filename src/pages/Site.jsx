import React from 'react';

const Site = () => {
  return (
    <div>
      <p>1. Добавить страницу, которая будет отображать данные, полученные через API (например, gists; можно воспользоваться любым работающим API из списка, название страницы в этом случае изменить соответствующим образом).
      </p><p>2. Добавить миддлвар для отправки запроса и обработки ответа, ошибки и состояния загрузки.
      </p><p>3. Отображать на странице данные из API или соответствующее состояние запроса. При ошибке пользователю должна быть доступна возможность отправить запрос заново без перезагрузкивсей страницы.
      </p><p>4. Создать action creator для loading и error.
      </p>
    </div>
  )
};

export default Site;