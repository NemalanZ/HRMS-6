import { lazy } from "react";

const MainPage = lazy(()=> import('../components/DefaultLayout/DefaultLayout'))
const DashBoardPage  = lazy(()=> import('../pages/MainPage/Main/Dashboard/jobs_dashboard'))
const JobPage = lazy(()=> import('../pages/MainPage/Administration/Jobs/requisition'))

const MainRoutes = {
  path: '/',
  element: <MainPage />,
  children: [
    {
      path: '/dashboard',
      element: <DashBoardPage/>,
    },
    {
      path: '/jobs',
      element: <JobPage/>,
    },
    
  ]
}

export default MainRoutes;