import useAuth from '@/hooks/useAuth'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth()

  const date = new Date()
  const today = Intl.DateTimeFormat('en-MA', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date)
  const content = (
    <section className='welcome'>
      <p>{today}</p>
      <h1>Welcome {username}!</h1>
      <p>
        <Link to='/dashboard/notes'>View TechNotes</Link>
      </p>
      <p>
        <Link to='/dashboard/notes/new'>Add New TechNote</Link>
      </p>
      {(isAdmin || isManager) && (
        <>
          <p>
            <Link to='/dashboard/users'>View User Settings</Link>
          </p>
          <p>
            <Link to='/dashboard/users/new'>Add New User</Link>
          </p>
        </>
      )}
    </section>
  )
  return content
}

export default Welcome
