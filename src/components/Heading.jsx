import { BiLogoGithub } from 'react-icons/bi'

const Heading = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2 px-4 text-center sm:flex-row sm:gap-4'>
                <BiLogoGithub size={48} className='shrink-0 sm:size-20' />
                <h1 className='text-3xl sm:text-4xl lg:text-[80px] font-bold'>Github User Finder</h1>
            </div>
            <div className='px-4 text-center'>
                <h3 className='mt-2 sm:mt-3 text-base sm:text-lg lg:text-[30px] font-extralight'>Search for any GitHub users to see their profiles and repositories.</h3>
            </div>
        </>
    )
}

export default Heading