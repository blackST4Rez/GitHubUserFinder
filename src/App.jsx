import Profile from './components/Profile'
import Heading from './components/Heading'
import SearchBar from './components/SearchBar'
import LatestRepo from './components/LatestRepo'
import Socials from './components/Socials'
import Repositories from './components/Repositories'
import { useState, useEffect } from 'react'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const defaultUsername = 'blackST4Rez'
  const [selectedUser, setSelectedUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

/* Function to take default & type input as a param for the API request */
  const fetchUserData = async (username) => {
    if (!username.trim()) {
      setError('Please enter a username')
      return
    }

    setLoading(true)
    setError('')
    setSelectedUser(null)
    setRepos([])

    try {
      /* Fetch the user profile only */
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      
      if (!userResponse.ok) {
        if (userResponse.status === 404) {
          throw new Error('User not found')
        }
        throw new Error('Failed to fetch user data')
      }
      
      const userData = await userResponse.json()
      console.log('User data:', userData)
      setSelectedUser(userData)

      /* Fetch the repositories only of the user that one searched for */
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories')
      }
      
      const reposData = await reposResponse.json()
      console.log('Repositories:', reposData)
      setRepos(reposData)

    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'An error occurred while fetching data')
      setSelectedUser(null)
      setRepos([])

    } finally {
      setLoading(false)
    }
  }

 /* Fetch the default user data (mine own) as soon as the browser loads for the first time */
  useEffect(() => {
    if (defaultUsername) {
      fetchUserData(defaultUsername)
    }
  }, [])

  /* Handle change in the input value typed and change the state */
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  /* Handle keydown Events for precise search */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch()
    }
  }

  /* Perform Search for Username and send the request to API */
  const performSearch = () => {
    if (searchTerm.trim()) {
      fetchUserData(searchTerm.trim())
    } else {
      setError('Please enter a username')
    }
  }


  return (
    <div className='min-h-screen bg-gray-50 px-4 py-4 sm:px-6 lg:px-8'>
      <Heading />

      <SearchBar
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleSearch={performSearch}
      />

      <div className='mx-auto mt-6 sm:mt-8 w-full max-w-6xl'>
        <div className='border p-4 sm:p-6 lg:p-10'>
          {loading && <p className='mt-4 text-center text-lg font-medium'>Loading default GitHub user...</p>}
          {error && <ErrorMessage message={error} />}
          {!loading && !selectedUser && !error && (
            <p className='mt-4 text-center text-lg font-medium'>No user loaded yet.</p>
          )}

          {selectedUser && (
            <>
              <Profile user={selectedUser} />
              <Socials user={selectedUser} />
              <LatestRepo />
              {repos.length === 0 && (
                <ErrorMessage message='This user has no public repositories.' />
              )}
              <Repositories repos={repos} />
            </>
          )}
        </div>
      </div>
      <br />
    </div>
  )
}

export default App