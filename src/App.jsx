import { useState } from 'react'
import usePaginationFetch from './hooks/usePaginationFetch'
import BlogList from './components/BlogList';

function App() {
  const {
    data: posts,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading} = usePaginationFetch
    ("https://jsonplaceholder.typicode.com/posts", 5);

  return (
    <div>
      <BlogList posts={posts}/>
    </div>
  )
}

export default App
