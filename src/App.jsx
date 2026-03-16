import { useState } from 'react'
import usePaginationFetch from './hooks/usePaginationFetch'
import BlogList from './components/BlogList';
import PagiNation from './components/PagiNation';
import Skeleton from './components/Skeleton';

function App() {
  const {
    data: posts,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading} = usePaginationFetch
    ("https://jsonplaceholder.typicode.com/posts", 5);

  if(isLoading){
    return (
      <div className='loading'>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </div>
    )
  }
  return (
    <div className='container'>
      <h1 className='title'>Blog Posts</h1>
      <BlogList posts={posts}/>
      <PagiNation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default App
