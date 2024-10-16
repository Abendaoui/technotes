import { Routes, Route } from 'react-router-dom'
import { DashLayout, Layout, Public } from '@/components'
import Login from '@/features/auth/Login'
import Welcome from '@/features/auth/Welcome'
import NotesList from '@/features/notes/NotesList'
import EditNote from '@/features/notes/EditNote'
import NewNote from '@/features/notes/NewNote'
import UsersList from '@/features/users/UsersList'
import EditUser from '@/features/users/EditUser'
import NewUserForm from '@/features/users/NewUserForm'
import Prefetch from '@/features/auth/Prefetch'
import PersistLogin from '@/features/auth/PersistLogin'
import { ROLES } from '@/config/roles'
import RequireAuth from '@/features/auth/RequireAuth'
RequireAuth
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        {/* Proteced Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path='dashboard' element={<DashLayout />}>
                <Route index element={<Welcome />} />
                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />
                  }
                >
                  <Route path='users'>
                    <Route index element={<UsersList />} />
                    <Route path=':id' element={<EditUser />} />
                    <Route path='new' element={<NewUserForm />} />
                  </Route>
                </Route>
                <Route path='notes'>
                  <Route index element={<NotesList />} />
                  <Route path=':id' element={<EditNote />} />
                  <Route path='new' element={<NewNote />} />
                </Route>
              </Route>
              {/* End Dash */}
            </Route>
          </Route>
        </Route>
        {/* End Of Proteced Routes */}
      </Route>
    </Routes>
  )
}

export default App
