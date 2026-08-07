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
            <div className='flex gap-2 justify-start mt-3'>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center gap-1'>
                        <LucideMapPinHouse size={30} />
                        <h5 className='font-light text-2xl'>{noLocation()}</h5>
                    </div>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center gap-1'>
                        <LiaLinkSolid size={30} />
                        <h5 className='font-light text-2xl'>{user.html_url}</h5>
                    </div>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center gap-1'>
                        <LucideFolderGit2 size={30} className='text-sky-400' />
                        <h5 className='font-light text-2xl'>{noPublicRepos()}</h5>
                    </div>
            </div>
        </>
    )
}

export default Socials