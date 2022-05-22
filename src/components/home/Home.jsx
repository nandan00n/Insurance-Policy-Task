import React from 'react'
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import records from '../chart/db.json'

const Home = () => {

  return (
      <>
   <Navbar/>
   <Search data={records} />
      </>
  )
}

export default Home