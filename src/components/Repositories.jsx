import { LucideActivity } from "lucide-react"
import { BiGitBranch, BiGitRepoForked, BiStar } from "react-icons/bi"
import { LiaClock } from "react-icons/lia"


const Repositories = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-6 mb-5 gap-5">
                <div className="w-50% flex flex-col border p-5">
                    <div className="flex gap-1 items-center justify-start text-2xl">
                        <BiGitBranch size={35} className="text-red-600"/>
                        <h5 className='font-bold text-4xl'>Javascript</h5>
                    </div>
                    <div className="items-center justify-start flex-wrap mt-4">
                        <h5 className='font-light text-2xl'>Codespace for Javascript.</h5>
                    </div>
                    <div className="flex items-center justify-start mt-4 gap-4">
                        <div className="flex items-center gap-1">
                            <LucideActivity size={20} className="text-red-600"/>
                            <h5 className='font-light text-xl'>Javascript</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiStar size={20} className="transition-all animate-spin duration-5s "/>
                            <h5 className='font-light text-xl'>8</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiGitRepoForked size={20} className="text-red-600" />
                            <h5 className='font-light text-xl'>19 </h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiaClock size={25} />
                            <h5 className='font-light text-xl'>Jan 26, 2024</h5>
                        </div>
                    </div>
                </div>
                <div className="w-50% flex flex-col border p-3.5">
                    <div className="flex gap-1 items-center justify-start text-2xl">
                        <BiGitBranch size={35} className="text-red-600"/>
                        <h5 className='font-bold text-4xl'>React</h5>
                    </div>
                    <div className="items-center justify-start flex-wrap mt-4">
                        <h5 className='font-light text-2xl'>Codespace for React.</h5>
                    </div>
                    <div className="flex items-center justify-start mt-4 gap-4">
                        <div className="flex items-center gap-1">
                            <LucideActivity size={20} className="text-red-600"/>
                            <h5 className='font-light text-xl'>React</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiStar size={20} className="transition-all animate-spin duration-5s "/>
                            <h5 className='font-light text-xl'>8</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiGitRepoForked size={20} className="text-red-600" />
                            <h5 className='font-light text-xl'>19 </h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiaClock size={25} />
                            <h5 className='font-light text-xl'>Jan 26, 2024</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repositories