import { LucideFolderGit2, LucideMapPinHouse } from 'lucide-react'
import { LiaLinkSolid } from 'react-icons/lia'

const Socials = ({
    user
}) => {

    function noLocation() {
        if (user.location === null) {
            return "N/A";
        }
        return user.location;
    }

    function noPublicRepos() {
        if (user.public_repos === null) {
            return "N/A";
        }
        return user.public_repos;
    }

    return (
        <>
            <div className='mt-4 flex flex-col gap-3 md:flex-row'>
                    <div className='flex w-full items-center justify-center gap-1 px-5 py-2.5 text-black md:w-1/3'>
                        <LucideMapPinHouse size={24} className='shrink-0 sm:size-7.5' />
                        <h5 className='text-base font-light sm:text-lg lg:text-2xl'>{noLocation()}</h5>
                    </div>
                    <div className='flex w-full items-center justify-center gap-1 px-5 py-2.5 text-black md:w-1/3'>
                        <LiaLinkSolid size={24} className='shrink-0 sm:size-7.5' />
                        <h5 className='text-center text-base font-light sm:text-lg lg:text-2xl'>{user.html_url}</h5>
                    </div>
                    <div className='flex w-full items-center justify-center gap-1 px-5 py-2.5 text-black md:w-1/3'>
                        <LucideFolderGit2 size={24} className='shrink-0 text-sky-400 sm:size-7.5' />
                        <h5 className='text-base font-light sm:text-lg lg:text-2xl'>{noPublicRepos()}</h5>
                    </div>
            </div>
        </>
    )
}

export default Socials