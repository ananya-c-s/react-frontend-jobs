import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-4">


404 Not Found</h1>
            <p className="text-xl mb-5">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-6">
                 <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                 </svg>
                This page does not exist</div></p>
            

            <Link
                to="/"
                className="!text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
                >Go Back</Link>
        </section>
    </>
)
}

export default ErrorPage