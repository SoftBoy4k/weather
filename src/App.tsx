import './App.css'
import Header from './componets/Header'
import MenuWeather from './componets/MenuWeather'
import logo from "./icons/Погода лого черный англ.svg"

function App() {

  return (
    <div className='app'>
      <img className='logo' src={logo} />
      <Header/>
      <MenuWeather/>
    </div>
  )
}

export default App
