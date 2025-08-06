import React from 'react'
import { Link } from 'react-router-dom'

const NoJobsAvailable = () => {
  return (
    <>
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-4">


No Jobs Found</h1>
            <p className="text-xl mb-5">
            <div className="flex items-center space-x-2">
             
                Go add some jobs using the button below</div></p>
            

            <Link
                to="/add-job"
                className="!text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
                >Add Jobs</Link>
        </section>
    </>
)
}

export default NoJobsAvailable