import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';

import CreatePassword from '../pages/InitialPage/Create_password';
import Forgotpassword from '../pages/InitialPage/Forgot_password';
import Loginpage from '../pages/InitialPage/Login'
import OTPscreen from '../pages/InitialPage/Otp';
import Registrationpage from '../pages/InitialPage/Register';
import CandidateList from '../pages/MainPage/Administration/Jobs/candidatelist';
import CandidateProfile from '../pages/MainPage/Administration/Jobs/candidateprofile';
import CreateRequisition from '../pages/MainPage/Administration/Jobs/create-requisition';
import CreateCandidate from '../pages/MainPage/Administration/Jobs/create_candidate';
import Jobdetails from '../pages/MainPage/Administration/Jobs/jobdetails';
import ManagedResumes from '../pages/MainPage/Administration/Jobs/manageresumes';
import Requisition from '../pages/MainPage/Administration/Jobs/requisition';
import UpdateCandidate from '../pages/MainPage/Administration/Jobs/update-candidate';
import UpdateRequisition from '../pages/MainPage/Administration/Jobs/update-requisition';
import JobsDashboard from '../pages/MainPage/Main/Dashboard/jobs_dashboard';
import Error404 from '../pages/MainPage/Pages/ErrorPage/error404';


function LoginRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Loginpage />} />
      <Route path='login' element={<Loginpage />} />
      <Route path='register' element={<Registrationpage />} />
      <Route path='createpassword' element={<CreatePassword />} />
      <Route path='forgotpassword' element={<Forgotpassword />} />
      <Route path='otp' element={<OTPscreen />} />
      <Route path='/app' element={<DefaultLayout />}>
        {/*Dashboard*/}
        <Route path='dashboard' element={<JobsDashboard />} />
        {/*Jobs*/}
        <Route path='jobs' element={<Requisition />} />
        <Route path='jobs/add-job' element={<CreateRequisition />} />
        <Route path='jobs/edit-job/:id' element={<UpdateRequisition />} />
        <Route path='jobs/job-details/:id' element={<Jobdetails />} />
        {/*Candidates*/}
        <Route path='candidates' element={<CandidateList />} />
        <Route path='candidates/add-candidate' element={<CreateCandidate />} />
        <Route path='candidates/candidate-profile/:id' element={<CandidateProfile />} />
        <Route path='candidates/edit-candidate/:id' element={<UpdateCandidate />} />
        {/*Manage-resume*/}
        <Route path='manage-resumes' element={<ManagedResumes />} />

      </Route>
      {/*Error404*/}
      <Route path='*' element={<Error404/>} />
    </Routes>
  )
}

export default LoginRoutes;