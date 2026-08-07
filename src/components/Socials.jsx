import { LucideMapPinHouse } from 'lucide-react'
import { LiaLinkSolid, LiaTwitter } from 'react-icons/lia'

const Socials = () => {
    return (
        <>
            <div className='flex gap-2 justify-start mt-3'>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center gap-1'>
                        <LucideMapPinHouse size={30} />
                        <h5 className='font-light text-2xl'>Kathmandu, Nepal</h5>
                    </div>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center'>
                        <LiaLinkSolid size={30} />
                        <h5 className='font-light text-2xl'>porfolio.github.io</h5>
                    </div>
                    <div className='w-1/3 flex items-center bg-white text-black px-5 py-2.5 justify-center'>
                        <LiaTwitter size={30} className='text-sky-400' />
                        <h5 className='font-light text-2xl'>@RakaMaharjan</h5>
                    </div>
            </div>
        </>
    )
}

export default Socials