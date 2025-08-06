import DialogMessage from '../components/DialogMessage'
import React, { useEffect,useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import { Bounce, ToastContainer, toast } from 'react-toastify';

const SingleJobPage = ({deleteJob}) => {
    let params = useParams()
    const [job,setJob] = useState([]);
    const [jobDeleted,setJobDeleted] = useState(false);
    let id = params.id
    useEffect(()=>{
      if(jobDeleted)
        return;
      console.log("ID")
      console.log(id)
        const fetchJobById = async()=>{
        const url ="/jobsList/"+id
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setJob(json)
    }
    fetchJobById();
    },[id,jobDeleted])

    let navigate = useNavigate();

const handleDelete = async (e, jobId) => {
    e.preventDefault();

  // Step 1: Show "Deleting..." toast
  toast.info("Deleting job...", { autoClose: 1500 });
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Step 2: Perform deletion

    await deleteJob(jobId); 
    setJobDeleted(true)// This must remove the job from the backend or state
  return navigate('/jobs');
};


   
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="!text-indigo-500 !hover:text-indigo-600 flex items-center"
        >
           Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50 w-screen">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4 !text-black">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p className="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6 ">
                Job Description
              </h3>

              <p className="mb-4 !text-black">
                {job.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4 !text-black">{job.salary} / Year</p>
            </div>
          </main>

          <aside>
            <div className="bg-white p-6 !text-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company?.name}</h2>

              <p className="my-2">
            {job.company?.description}      
        </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company?.contactEmail}    
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company?.contactPhone}</p>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 !text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
              <button   onClick={(e) => handleDelete(e,job.id)} className="!bg-red-500 !hover:bg-red-600 !text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                Delete Job
              </button>
          
            </div>
          </aside>
        </div>
      </div>
    </section>


    </>
  )
}

export default SingleJobPage


