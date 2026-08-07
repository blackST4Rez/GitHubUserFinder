import { BiLogoGithub } from 'react-icons/bi'

const Heading = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:gap-4'>
                <BiLogoGithub size={56} className='shrink-0 sm:size-20' />
                <h1 className='text-4xl font-bold sm:text-5xl lg:text-[80px]'>Github User Finder</h1>
            </div>
            <div className='px-4 text-center'>
                <h3 className='mt-3 text-lg font-extralight sm:text-xl lg:text-[30px]'>Search for any GitHub users to see their profiles and repositories.</h3>
            </div>
        </>
    )
}

export default Heading