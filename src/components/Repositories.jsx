import { LucideActivity } from "lucide-react"
import { BiGitBranch, BiGitRepoForked, BiStar } from "react-icons/bi"
import { LiaClock } from "react-icons/lia"

const Repositories = ({
    repos
}) => {

    return (
        <div className="mt-6 mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {repos.map(repo => (
                <div key={repo.id} className="flex w-full flex-col border p-4 sm:p-5">
                    <div className="flex items-center justify-start gap-1 text-xl sm:text-2xl">
                        <BiGitBranch size={30} className="text-red-600 sm:size-8.75" />
                        <h5 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{repo.name}</h5>
                    </div>
                    <div className="mt-4 flex-wrap items-center justify-start">
                        <h5 className="text-base font-light sm:text-lg lg:text-2xl">{repo.description}</h5>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
                        <div className="flex items-center gap-1">
                            <LucideActivity size={18} className="text-red-600 sm:size-5" />
                            <h5 className="text-sm font-light sm:text-base lg:text-xl">{repo.language}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiStar size={18} className="animate-spin transition-all sm:size-5" />
                            <h5 className="text-sm font-light sm:text-base lg:text-xl">{repo.stargazers_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiGitRepoForked size={18} className="text-red-600 sm:size-5" />
                            <h5 className="text-sm font-light sm:text-base lg:text-xl">{repo.forks_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiaClock size={20} className="sm:size-6" />
                            <h5 className="text-sm font-light sm:text-base lg:text-xl">{repo.updated_at}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories