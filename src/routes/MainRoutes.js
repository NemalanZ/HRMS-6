import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//layouts
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';
import CreateRequisition from '../pages/MainPage/Administration/Jobs/create-requisition';
import CreateCandidate from '../pages/MainPage/Administration/Jobs/create_candidate';
import Jobdetails from '../pages/MainPage/Administration/Jobs/jobdetails';

import Requisition from '../pages/MainPage/Administration/Jobs/requisition';
import UpdateCandidate from '../pages/MainPage/Administration/Jobs/update-candidate';
import UpdateRequisition from '../pages/MainPage/Administration/Jobs/update-requisition';
import CandidateListLayout from '../pages/MainPage/Administration/JobsLayout/CandidateListLayout';
import ManagedResumesLayout from '../pages/MainPage/Administration/JobsLayout/ManageResumesLayout';
import RequisitionLayout from '../pages/MainPage/Administration/JobsLayout/RequisitionLayout';
import JobsDashboard from '../pages/MainPage/Main/Dashboard/jobs_dashboard';
import Error404 from '../pages/MainPage/Pages/ErrorPage/error404';
import EmployeeProfile from '../pages/MainPage/Pages/Profile/employeeprofile';

const mainPages = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<JobsDashboard />} />
      <Route path='jobs' element={<RequisitionLayout />}>
        <Route path='add-job' element={<CreateRequisition />} />
        <Route path='job-details' element={<Jobdetails />} />
        <Route path='edit-job' element={<UpdateRequisition />} />
      </Route>
      <Route to='candidate' element={<CandidateListLayout />}>
        <Route path='add-candidate' element={<CreateCandidate />} />
        <Route path='candidate-profile' element={<EmployeeProfile />} />
        <Route path='edit-candidate' element={<UpdateCandidate />} />
      </Route>
      <Route to='manage-resumes' element={<ManagedResumesLayout/>}>
        <Route to='' element/>

      </Route>
      <Route path='*' element={<Error404 />} />
    </Route>
  )
)

function MainRoutes() {
  return (
    <RouterProvider mainPages={mainPages} />
  )
}

export default MainRoutes;