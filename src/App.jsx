import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='main-container flex text-center w-[90%] mx-auto'>
        <div className='left-container w-[70%]'>
          <Blogs />
        </div>
        <div className='right-container w-[30%]'>
          <h1>Reading Time: 0</h1>
          <h1>Bookmark Count: 0</h1>
        </div>

      </div>
    </>
  )
}

export default App
