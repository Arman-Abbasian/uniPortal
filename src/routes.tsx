import { lazy } from 'react'
import ProfessorMain from '@/pages/professor/main/Index'
import App from '@/App'
import AdminMain from '@/pages/admin/main/Index'
import UserForm from '@/pages/admin/userForm/Index'
import UserList from '@/pages/admin/userList/Index'
import FacultyForm from '@/pages/admin/facultyForm/Index'
import FacultyList from '@/pages/admin/facultyList/Index'
import UserRoutes from '@/components/UserRoutes'
import GuestRoutes from '@/components/GuestRoutes'
import Home from '@/pages/Home'
import Login from '@/pages/auth/login/Index'
import CourseReserveForm from '@/pages/professor/courseReserveForm/Index'
import CourseReserveList from '@/pages/professor/courseReserveList/Index'
import StudentMain from '@/pages/student/main/Index'
import CoursePlan from '@/pages/student/coursePlan/Index'
import SelfPlan from '@/pages/student/selfPlan/Index'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'auth',
        element: <GuestRoutes />,
        children: [{ path: 'login', element: <Login /> }],
      },

      {
        element: <UserRoutes />,
        children: [
          {
            path: 'admin',
            element: <AdminMain />,
            children: [
              { index: true, element: <AdminMain /> },
              { index: 'userForm', element: <UserForm /> },
              { path: 'userList', element: <UserList /> },
              { path: 'facultyForm', element: <FacultyForm /> },
              { path: 'facultyList', element: <FacultyList /> },
            ],
          },
          {
            path: 'professor',
            element: <ProfessorMain />,
            children: [
              { index: true, element: <ProfessorMain /> },
              { path: 'courseReserveForm', element: <CourseReserveForm /> },
              { path: 'courseReserveList', element: <CourseReserveList /> },
            ],
          },
          {
            path: 'student',
            element: <StudentMain />,
            children: [
              { index: true, element: <StudentMain /> },
              { path: 'coursePlan', element: <CoursePlan /> },
              { path: 'selfPlan', element: <SelfPlan /> },
            ],
          },
        ],
      },
    ],
  },
]
