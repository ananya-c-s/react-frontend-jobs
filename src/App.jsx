import { Fragment } from "react"

import {BrowserRouter,createBrowserRouter,createRoutesFromElements,Link,Route,RouterProvider,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import SingleJobPage from "./pages/SingleJobPage"
import EditJobPage from "./pages/EditJobPage"
import ErrorPage from "./pages/ErrorPage"
import MainLayout from './layouts/MainLayout'
import Spinner from "./components/Spinner"
import AddJobPage from "./pages/AddJobPage"

const addJobs = async (newJob) =>{

  const sendPostRequest = async () => {
    try {
      const response = await fetch("/jobsList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error sending job:", error);
    }
  };
  await sendPostRequest();
};
const deleteJobs = async(jobId) =>{
  const url = "/jobsList/"+jobId
  const options = {
    method : 'DELETE',
    headers : {
      'Content-Type': 'application/json',
    }
  }
  const response = await fetch(url,options)
  if (!response.ok) {
    throw new Error("Failed to delete job");
  }  
  console.log(response.json())
}

const editJobSubmit = async (job) =>{
  console.log("editJob")
    console.log(job)

  const sendPutRequest = async () => {
    try {
      const response = await fetch("/jobsList/"+job.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error sending job:", error);
    }
  };
  await sendPutRequest();

}
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage/>}></Route>
    <Route path='/jobs' element ={<JobsPage isHome = {false}/>}/>
    <Route path='/jobs/:id' element ={<SingleJobPage deleteJob = {deleteJobs} />}/>
    <Route path='/add-job' element ={<AddJobPage addJobSubmit={addJobs} />}/>
    <Route path='/edit-job/:id' element ={<EditJobPage editJobSubmit={editJobSubmit} />}/>
    <Route path='*' element ={<ErrorPage/>}/>
  </Route>)
)
function App() {
  return <RouterProvider router = {router}/>
}

export default App
