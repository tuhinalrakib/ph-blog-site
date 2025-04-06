import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked,setBookmarked] = useState([])
  const [readingCount,setReadingCount] = useState(0)


  const handleBookmark = (blog)=>{
    setBookmarked([...bookmarked,blog])
  }
  
  const handleMarkAsRead = (time,id)=>{
    setReadingCount(readingCount + time)
    handleRemoveFrombookmarked(id)
  }

  const handleRemoveFrombookmarked = (id)=>{
    const remainingmark = bookmarked.filter(mark=>mark.id !== id)
    setBookmarked(remainingmark)
  }

  return (
    <>
      <Navbar />
      <div className='main-container flex text-center w-[90%] mx-auto'>
        <div className='left-container w-[70%]'>
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}/>
        </div>
        <div className='right-container w-[30%]'>
          <h1 className='text-3xl font-semibold'>Reading Time: {readingCount}</h1>
          <h1 className='text-3xl font-semibold'>Bookmark Count: {bookmarked.length}</h1>
          {
            bookmarked.map(bookmark=><p key={bookmark.id} className='bg-amber-200 rounded-2xl m-5 p-5 shadow'>{bookmark.title}</p>)
          }
        </div>

      </div>
    </>
  )
}

export default App
