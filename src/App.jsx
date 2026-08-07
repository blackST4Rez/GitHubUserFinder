import Profile from './components/Profile'
import Heading from './components/Heading'
import SearchBar from './components/SearchBar'
import LatestRepo from './components/LatestRepo'
import Socials from './components/Socials'
import Repositories from './components/Repositories'


const App = () => {

  

  return (
    <div>
      <Heading />
      <SearchBar />
      <div className='min-w-2xs h-full mt-10 ml-65 mr-65 mb-40'>
        <div className='border p-15'>
          <Profile />
          <Socials />
          <LatestRepo />
          <Repositories />
          <Repositories />
          <Repositories />
        </div>
      </div>
      <br />
    </div>
  )
}

export default App