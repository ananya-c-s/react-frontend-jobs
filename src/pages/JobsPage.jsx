import React from 'react'
import JobListings from '../components/JobListings'
const JobsPage = ({isHome=false}) => {
  return (
     <JobListings isHome={isHome}/>
  )
}

export default JobsPage