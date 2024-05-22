import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './Routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <div className='min-h-screen w-full bg-background dark:bg-black flex flex-col justify-between'>
        <div className='flex flex-col'>
          <ScrollToTop />
          <Header />
          <div className=' bg-background dark:bg-black'>
            {router}
          </div>
        </div>

        <div className=' bg-background dark:bg-black justify-self-end' >

          <Footer />
        </div>



      </div>
    </>
  )
}

export default App
