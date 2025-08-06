import React, { useEffect, useState } from 'react'
import JobListing from './JobListing';
import Spinner from './Spinner';
import NoJobsAvailable from '../pages/NoJobsAvailable'

const JobListings = ({isHome}) => {
      const [jobs, setJobs] = useState([]); // default = empty array
      const [loading, setLoading] = useState(true); // ✅ loading state

      let firstThreeJobs;

      if (isHome) {
        firstThreeJobs = jobs.slice(0, 3); 
      } else {
        firstThreeJobs = jobs;
      }

    useEffect(() => {
      const url ="/jobsList"
      const fetchJobs =  async() =>{
        try{
    
          const response = await fetch(url)
          const jsonData = await response.json();  // 👈 parse as text, not JSON
          console.log("Raw response:", jsonData); 
           setJobs(jsonData)
          console.log(jsonData)
        }
        catch(e){
          console.error(e)
        }
        finally{
          setLoading(false)
        }
      }
      fetchJobs();

    }, []);
  if(loading){
    return (<><Spinner/></>)
  }    
  return (
   
    <>
    {firstThreeJobs.length==0 && !isHome &&
    <NoJobsAvailable/>
  }
   {firstThreeJobs.length!=0 &&
   
   <section className="bg-blue-50  text-black px-4 py-10 w-screen">
        <div className="container-xl lg:container m-auto">
          
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {firstThreeJobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
          </div>
          
        </div>
      </section>
}
          </>
  )
}

export default JobListings