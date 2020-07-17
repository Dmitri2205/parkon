<h1>ParkOn</h1>

<p>Проект выпускной практики на курсах Frontend разработки на портале <a href="https://geekbrains.ru">Geekbrains</a> от Mail.ru Group.</p>
<br>
<p>Приложение представляет собой Progressive Web App написаннное на фреймфорке React.js
<br>
  На репозитории выложена production сборка в целях защиты интелектуальной собственности разработчиков и продуктоунера команды ParkOn.Мы планируем поддерживать и развивать проект после его выхода на рынок,а так же развивать и улучшать функционал по мере увеличения колличества пользователей.
  
  
 Для проверки функционала приложения необходимо запустить сервер командой <code>npm run dev</code> предварительно запустив OpenServer+MongoDB.
 
 <br>
 Все права интелектуальной собственности на код сервера принадлежат Абзалу Танкибаеву.
 <br>
 <a href="https://github.com/Dmitri2205/">Тут будет ссылка на сервер</a>
  <br>
  <br>
  Продуктоунер:<a href="mailto:marfuny95@mail.ru">Илья Литвинов</a>
  <br>
  <br>
  Backend-разработчик:<a href="mailto:AbzalT@list.ru">Абзал Танкибаев</a>
  <br>
  <br>
  На данный момент приложение находится в тестовом режиме.На момент презентации продукта нами был арендован виртуальный VDS сервер на хостинге <a href="https://firstvds.ru"> firstvds.ru</a> c VNZ-виртуализацией и Ubuntu 18.4 arm64. 
</p>
<h2>Основные возможности приложения:</h2>
<br>
<ul>
  <li>Возможность регистрации по СМС(Временно недоступно в тестовом режиме)</li>
  <li>Возможность регистрации по почте (Требуется сервер написанный нашим backend-разработчиком)</li>
  <li>Вход по почте или номеру телефона (Требуется сервер написанный нашим backend-разработчиком)</li>
  <li>Отображение точек парковок на Яндекс.Картах</li>
  <li>Возможность построения маршрута от текущей позиции пользователя</li>
  <li>Возможность перехода на экран трансляции конкретной зоны парковки(На данный момент имеется только одна камера).</li>
  <li>Отображение колличества свободных мест(Тестовый ручной режим.Камера и сервер нейронной сети работают в связке. На 17.07.2020 камера и сервер ИНС отключены)</li>
  <li>Возможность отправки письма на email поддержки</li>
  <li>Возможность сохранения домашнего адреса для последующего использования на карте(Тестовый режим)</li>
  <h3>(!) Проект выполнен по MVP</h3>
  <h5>Реализован не весь функционал приложения.Дополнительные функции и возможности такие как голосовой поиск и поиск по адресам будут реализованы нами в будущем.Улучшение стабильности и функционала так же будут внесены при следующих обновлениях.</h5>
  <h2>Структура приложения:</h2>
![Ierarchy](https://raw.githubusercontent.com/Dmitri2205/Portfolio/master/img/Ierarchy.png)
<br>
<p>Навигация между основными и дополнительными модулями осуществляется посредством изменения состояния компонента App.jsx и его ближайших дочерних компонентов(Changeauto\Changereg\MainScreen\MapModule\Stream\Training\Welcome*.jsx).
  ![State](https://raw.githubusercontent.com/Dmitri2205/Portfolio/master/img/AppState.png)
  <br>
  Для управления глобальным состоянием приложения в зависимости от действий пользователя с компонентами нижних уровней используются колбэк функции,которые передаются от компонента-родителя в качестве props и вызываются внутри дочернего элемента с одним из аргументов для обработки состояния отображаемого экрана внутри App.jsx.Каждый компонент отрисовывается только в том случае,когда ему передан параметр который проверяется с помощью имплементарного оператора и инлайн-стилей, и позволяет нам отрисовать те или иные элементы в зависимости от условия или набора условий переданных от компонента к компоненту как вниз по иерархии,так и вверх.
   ![Select function](https://raw.githubusercontent.com/Dmitri2205/Portfolio/master/img/App.jsx.png)
Пример условия отрисовки компонента:
<code><div className="myDiv" style={{this.props.visible ? {display:'block'}:{display:'none'} }}></div></code>
<br>
Некоторые из главных экранов(далее "Компоненты")имеют дочерние компоненты,такие как: 
<br>
<br>
Changereg => EmailRegistration\PhoneRegistration
<br>
Changeauto => EmailValidation\PhoneValidation
<br>
MapModule => About\Feedback\Personal\Personalroom
<br>
<br>
С помощью такой структуры приложения нам удалось отказаться от использования модуля react-router в продакшн сборке,а так же улучшить стабильность и быстродействие приложения.Стили и адаптив подключены к главному компоненту App.jsx.Так же по необходимости используются инлайн-стили для конкретных элементов.
<br>
Использование React-Redux не предусмотренно и не имеет смысла.Все необходимые данные хранятся в LocalStorage браузера/PWA и являются строками.
</p>
















