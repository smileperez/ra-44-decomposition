import './App.css';
import ModuleNews from './components/ModuleNews'
import ModuleBanner from './components/ModuleBanner'
import Logo from './components/Logo';
import ModuleAdvertisement from './components/ModuleAdvertisement'
import ModuleSearch from './components/ModuleSearch';
import Widgets from './components/Widgets'


function App() {

  // Тут должно быть определние страны через хапрос браузеру
  const country = 'Россия';
  const city = 'Москва';

  // Тут должно быть определние куки пользователя, чтобы понять какую рекламу ему дать
  const cookie = 'Куки пользователя'

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='Top'>
          <ModuleNews tabs={['Сейчас в СМИ', {country}, 'Рекомендуем']} newsList={'news'} newsLogo={'logos'} />
          <Widgets type={'Date'} format={'format'}/>
          <ModuleAdvertisement target={cookie} />
          <Widgets type={'Currency'} data={['RUB','USD','EUR','NEFT']}/>
        </div>
        <div className='Middle'>
          <Logo />
          <ModuleSearch
            menu={testSearchMenu}
            description={'Найдется всё...'}
            btnText={'Найти'}
          />
        </div>
        <div className='Bottom'>
          <ModuleBanner
            img={'ссылка на изображение'}
            link={'ссылка'}
            target={cookie}
          />
          <Widgets type={'Weather'} data={[{country},{city}]}/>
          <Widgets type={'Map'} data={country}/>
          <Widgets type={'Broadcasts'} data={[{title},{list},{countToShow}]}/>
          <Widgets type={'Visited'} data={['Недвижимость','Маркет','Авто.ру']}/>
          <Widgets type={'TV'} data={[{title},{list},{showIcon},{countToShow}]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
