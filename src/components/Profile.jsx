import { BiCalendar, BiGitRepoForked, BiLogoPeriscope, BiUser } from 'react-icons/bi'
import UserProfile from '/public/Profile.png'
import { Users } from 'lucide-react'


const Profile = () => {
    return (
        <>
            <div className="flex min-w-200px gap-10">
                <div className='w-60 h-60 rounded-full object-cover overflow-hidden'>
                    <img className='' src={UserProfile} alt="Profile" />
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-4xl font-bold'>blackST4Rez</h4>
                    <h4 className='text-2xl'>@blackST4Rez</h4>
                    <p className='text-3xl font-extralight mt-8'>A MERN full stack developer.</p>
                    <div className='flex gap-6'>
                        <div className='flex gap-1 items-center'>
                            <BiLogoPeriscope size={25}/>
                            <h5 className='font-light text-2xl'>Kathmandu, Nepal</h5>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BiCalendar size={20} />
                            <h5 className='font-light text-2xl'>Joined Oct 25, 2018</h5>
                        </div>
                    </div>
                    <a href="" target='_blank' className='bg-black text-white hover:bg-emerald-500 hover:text-black transition-all duration-300 w-max p-3 rounded-full mt-2.5 font-bold'>View Profile</a>
                </div>
            </div>
            <div className='flex gap-5 mt-15 border-b pb-6'>
                    <div className='w-1/3 flex gap-1 items-center bg-white text-black border hover:bg-black hover:text-white transition-all duration-300 px-5 py-2.5 justify-center select-none'>
                        <Users className='text-sky-500' />
                        <h5 className='font-bold text-2xl'>2349 Followers</h5>
                    </div>
                    <div className='w-1/3 flex gap-1 items-center bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border px-5 py-2.5 justify-center select-none'>
                        <BiUser size={30} className='text-emerald-500' />
                        <h5 className='font-bold text-2xl'>123 Following</h5>
                    </div>
                    <div className='w-1/3 flex gap-1 items-center bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border px-5 py-2.5 justify-center select-none'>
                        <BiGitRepoForked size={30} className='text-red-700' />
                        <h5 className='font-bold text-2xl'>44 Respositories</h5>
                    </div>
            </div>
            </>
    )
    
}

export default Profile