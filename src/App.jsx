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

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      performSearch()
    }
  }

  async function fetchGithubUser(username, clearSearch = true) {
    setLoading(true)
    setError('')

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!userResponse.ok) {
        if (userResponse.status === 404) {
          throw new Error(`No GitHub user found for "${username}".`)
        }
        throw new Error(`GitHub API error: ${userResponse.status}`)
      }

      const userData = await userResponse.json()
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
      )
      const repoData = reposResponse.ok ? await reposResponse.json() : []

      setSelectedUser(userData)
      setRepos(repoData)
      if (clearSearch) {
        setSearchTerm('')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed. Please try again.')
      setSelectedUser(null)
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  async function performSearch() {
    const username = searchTerm.trim()
    if (!username) {
      setError('Please enter a GitHub username.')
      return
    }

    await fetchGithubUser(username)
  }

  useEffect(() => {
    fetchGithubUser(defaultUsername, false)
  }, [])

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