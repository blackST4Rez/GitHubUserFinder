import Profile from './components/Profile'
import Heading from './components/Heading'
import SearchBar from './components/SearchBar'
import LatestRepo from './components/LatestRepo'
import Socials from './components/Socials'
import Repositories from './components/Repositories'
import { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const users = [
  {
    id: 1,
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: "GitHub's official mascot",
    location: "San Francisco",
    created_at: "Jan 25, 2011",
    html_url: "https://github.com/octocat",
    followers: 9500,
    following: 9,
    public_repos: 8,
    followers_url: 9500,
    following_url: 9,
    repos_url: 8,
    repos: [
      {
        id: 101,
        name: "Hello-World",
        description: "My first repository on GitHub!",
        language: "Markdown",
        stargazers_count: 2500,
        forks_count: 1800,
        updated_at: "Jan 15, 2024",
      },
      {
        id: 102,
        name: "Spoon-Knife",
        description: "This repo is for demonstration purposes only.",
        language: "HTML",
        stargazers_count: 13000,
        forks_count: 140000,
        updated_at: "Feb 10, 2024",
      },
      {
        id: 103,
        name: "octocat.github.io",
        description: "Octocat personal website",
        language: "CSS",
        stargazers_count: 320,
        forks_count: 180,
        updated_at: "Nov 5, 2023",
      },
    ],
  },
  {
    id: 2,
    login: "torvalds",
    avatar_url: "https://avatars.githubusercontent.com/u/1024025?v=4",
    bio: "Creator of Linux and Git",
    location: "Portland, OR",
    created_at: "Sep 3, 2011",
    html_url: "https://github.com/torvalds",
    followers: 210000,
    following: 0,
    public_repos: 7,
    followers_url: 210000,
    following_url: 0,
    repos_url: 7,
    repos: [
      {
        id: 201,
        name: "linux",
        description: "Linux kernel source tree",
        language: "C",
        stargazers_count: 185000,
        forks_count: 58000,
        updated_at: "Jul 1, 2024",
      },
      {
        id: 202,
        name: "libdc",
        description: "Library for the DC",
        language: "C",
        stargazers_count: 890,
        forks_count: 210,
        updated_at: "Aug 20, 2023",
      },
    ],
  },
  {
    id: 3,
    login: "gaearon",
    avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
    bio: "Working on React at Meta. Co-author of Redux and Create React App.",
    location: null,
    created_at: "May 25, 2011",
    html_url: "https://github.com/gaearon",
    followers: 82000,
    following: 170,
    public_repos: 280,
    followers_url: 82000,
    following_url: 170,
    repos_url: 280,
    repos: [
      {
        id: 301,
        name: "redux",
        description: "Predictable state container for JavaScript apps",
        language: "TypeScript",
        stargazers_count: 61000,
        forks_count: 15200,
        updated_at: "May 20, 2024",
      },
      {
        id: 302,
        name: "overreacted.io",
        description: "Personal blog",
        language: "JavaScript",
        stargazers_count: 7200,
        forks_count: 2800,
        updated_at: "Mar 12, 2024",
      },
      {
        id: 303,
        name: "react-hot-loader",
        description: "Tweak React components in real time.",
        language: "JavaScript",
        stargazers_count: 12200,
        forks_count: 980,
        updated_at: "Sep 18, 2023",
      },
    ],
  },
  {
    id: 4,
    login: "yyx990803",
    avatar_url: "https://avatars.githubusercontent.com/u/499550?v=4",
    bio: "Creator of Vue.js and Vite",
    location: "Singapore",
    created_at: "Nov 28, 2010",
    html_url: "https://github.com/yyx990803",
    followers: 98000,
    following: 45,
    public_repos: 180,
    followers_url: 98000,
    following_url: 45,
    repos_url: 180,
    repos: [
      {
        id: 401,
        name: "vue",
        description: "This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core",
        language: "JavaScript",
        stargazers_count: 208000,
        forks_count: 34000,
        updated_at: "Jun 15, 2024",
      },
      {
        id: 402,
        name: "vite",
        description: "Next generation frontend tooling. It's fast!",
        language: "TypeScript",
        stargazers_count: 69000,
        forks_count: 6200,
        updated_at: "Jun 28, 2024",
      },
    ],
  },
  {
    id: 5,
    login: "sindresorhus",
    avatar_url: "https://avatars.githubusercontent.com/u/170270?v=4",
    bio: "Full-time open-sourcerer. Focuses on Node.js, Swift and TypeScript.",
    location: "Thailand",
    created_at: "Oct 15, 2009",
    html_url: "https://github.com/sindresorhus",
    followers: 62000,
    following: 45,
    public_repos: 1100,
    followers_url: 62000,
    following_url: 45,
    repos_url: 1100,
    repos: [
      {
        id: 501,
        name: "awesome",
        description: "😎 Awesome lists about all kinds of interesting topics",
        language: null,
        stargazers_count: 320000,
        forks_count: 26000,
        updated_at: "Jul 2, 2024",
      },
      {
        id: 502,
        name: "pure",
        description: "Pretty, minimal and fast ZSH prompt",
        language: "Shell",
        stargazers_count: 13200,
        forks_count: 980,
        updated_at: "Apr 10, 2024",
      },
      {
        id: 503,
        name: "query-string",
        description: "Parse and stringify URL query strings",
        language: "TypeScript",
        stargazers_count: 6800,
        forks_count: 450,
        updated_at: "May 22, 2024",
      },
    ],
  },
  {
    id: 6,
    login: "kentcdodds",
    avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
    bio: "Improving the world with quality software · Husband, Father, Latter-day Saint",
    location: "Salt Lake City, UT",
    created_at: "Mar 5, 2012",
    html_url: "https://github.com/kentcdodds",
    followers: 42000,
    following: 90,
    public_repos: 340,
    followers_url: 42000,
    following_url: 90,
    repos_url: 340,
    repos: [
      {
        id: 601,
        name: "advanced-react-patterns",
        description: "This is the latest workshop of mine to teach you about Advanced React Patterns",
        language: "JavaScript",
        stargazers_count: 4200,
        forks_count: 980,
        updated_at: "Feb 28, 2024",
      },
      {
        id: 602,
        name: "bookshelf",
        description: "Build a ReactJS App Workshop",
        language: "JavaScript",
        stargazers_count: 3100,
        forks_count: 1200,
        updated_at: "Dec 15, 2023",
      },
    ],
  },
  {
    id: 7,
    login: "wesbos",
    avatar_url: "https://avatars.githubusercontent.com/u/176013?v=4",
    bio: "Full Stack Developer, Teacher, and Entrepreneur",
    location: "Hamilton, Ontario",
    created_at: "Jan 12, 2010",
    html_url: "https://github.com/wesbos",
    followers: 48000,
    following: 120,
    public_repos: 210,
    followers_url: 48000,
    following_url: 120,
    repos_url: 210,
    repos: [
      {
        id: 701,
        name: "JavaScript30",
        description: "30 Day Vanilla JS Challenge",
        language: "HTML",
        stargazers_count: 28000,
        forks_count: 18500,
        updated_at: "Jun 1, 2024",
      },
      {
        id: 702,
        name: "Advanced-React",
        description: "Starter Files and Solutions for Advanced React Course",
        language: "JavaScript",
        stargazers_count: 4200,
        forks_count: 2800,
        updated_at: "Oct 20, 2023",
      },
    ],
  },
  {
    id: 8,
    login: "bradtraversy",
    avatar_url: "https://avatars.githubusercontent.com/u/5550850?v=4",
    bio: "Full stack web developer and online instructor",
    location: "Boston, MA",
    created_at: "Sep 25, 2013",
    html_url: "https://github.com/bradtraversy",
    followers: 65000,
    following: 30,
    public_repos: 180,
    followers_url: 65000,
    following_url: 30,
    repos_url: 180,
    repos: [
      {
        id: 801,
        name: "50projects50days",
        description: "50+ mini web projects using HTML, CSS & JS",
        language: "CSS",
        stargazers_count: 38000,
        forks_count: 9800,
        updated_at: "May 18, 2024",
      },
      {
        id: 802,
        name: "mern-auth",
        description: "MERN authentication with JWT and Redux Toolkit",
        language: "JavaScript",
        stargazers_count: 420,
        forks_count: 210,
        updated_at: "Jan 30, 2024",
      },
    ],
  },
  {
    id: 9,
    login: "antfu",
    avatar_url: "https://avatars.githubusercontent.com/u/11247099?v=4",
    bio: "A shipwright for JavaScript tooling. Core team member of Vue, Vite, Nuxt...",
    location: "Singapore",
    created_at: "Mar 2, 2015",
    html_url: "https://github.com/antfu",
    followers: 38000,
    following: 180,
    public_repos: 280,
    followers_url: 38000,
    following_url: 180,
    repos_url: 280,
    repos: [
      {
        id: 901,
        name: "vitesse",
        description: "🏕 Opinionated Vite + Vue Starter Template",
        language: "TypeScript",
        stargazers_count: 9200,
        forks_count: 980,
        updated_at: "Jun 10, 2024",
      },
      {
        id: 902,
        name: "unocss",
        description: "The instant on-demand atomic CSS engine.",
        language: "TypeScript",
        stargazers_count: 17000,
        forks_count: 850,
        updated_at: "Jul 3, 2024",
      },
    ],
  },
  {
    id: 10,
    login: "leerob",
    avatar_url: "https://avatars.githubusercontent.com/u/9113740?v=4",
    bio: "VP of Developer Experience at Vercel. Helping developers build a faster web.",
    location: "Des Moines, IA",
    created_at: "Oct 8, 2014",
    html_url: "https://github.com/leerob",
    followers: 28000,
    following: 80,
    public_repos: 110,
    followers_url: 28000,
    following_url: 80,
    repos_url: 110,
    repos: [
      {
        id: 1001,
        name: "leerob.io",
        description: "✨  My portfolio built with Next.js, Tailwind, and Vercel.",
        language: "TypeScript",
        stargazers_count: 7800,
        forks_count: 1800,
        updated_at: "Jun 25, 2024",
      },
      {
        id: 1002,
        name: "nextjs-blog",
        description: "Example blog using Next.js",
        language: "JavaScript",
        stargazers_count: 1200,
        forks_count: 450,
        updated_at: "Feb 14, 2024",
      },
    ],
  },
];
  

  const [selectedUser, setSelectedUser] = useState(users[1])
  
  const [searchTerm, setSearchTerm] = useState('')


  function handleChange(e) {
    setSearchTerm(e.target.value) 
  }


  function handleKeyDown(e) {
    if (e.key === 'Enter') { 
      performSearch()         
    }
  }


  function performSearch() {

    if (!searchTerm.trim()) {
      setSelectedUser(users[1])
      return
    }


    const foundUser = users.find(user => 
      user.login.toLowerCase() === searchTerm.toLowerCase().trim()
    )


    if (foundUser) {
      setSelectedUser(foundUser) 
      console.log(`Found user: ${foundUser.login} (ID: ${foundUser.id})`)
    } else {
      alert(`User "${searchTerm}" not found`)
    }
  }

  return (
    <div>
      <Heading />
      

      <SearchBar 
        searchTerm={searchTerm}
        handleChange={handleChange} 
        handleKeyDown={handleKeyDown}
      />
      
      <div className='min-w-2xs h-full mt-10 ml-65 mr-65 mb-40'>
        <div className='border p-15'>
          <Profile user={selectedUser} />
          <Socials user={selectedUser} />
          <LatestRepo />
          {selectedUser.public_repos === 0 && <ErrorMessage />}
          <Repositories repos={selectedUser.repos} />
        </div>
      </div>
      <br />
    </div>
  )
}

export default App