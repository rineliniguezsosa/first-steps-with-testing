import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyAweasomeApp } from './components/MyAweasomeApp.tsx'
// import { FirstStepsApp } from './components/FirstStepsApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp/> */}
    <MyAweasomeApp/>
  </StrictMode>,
)
