import { BiLogoGithub } from 'react-icons/bi'

const Heading = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <BiLogoGithub size={80}/>
                <h1 className='text-[80px]'>Github User Finder</h1>
            </div>
            <div className='text-center'>
                <h3 className='text-[30px] font-extralight'>Search for any GitHub users to see their profiles and repositories.</h3>
            </div>
        </>
    )
}

export default Heading