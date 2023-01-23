import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { InitialSec } from './components/AboutSec'
import { ContactSec } from './components/ContactSec'
import { Header } from './components/Header'
import { AboutSec } from './components/InitialSec'
import { PortifolioSec } from './components/PortifolioSec'
import { SkillsSec } from './components/SkillsSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <InitialSec></InitialSec>
      <AboutSec></AboutSec>
      <SkillsSec></SkillsSec>
      <PortifolioSec></PortifolioSec>
      <ContactSec></ContactSec>
      <footer></footer>
    </div>
  )
}

export default App
