import { LucideActivity } from "lucide-react"
import { BiGitBranch, BiGitRepoForked, BiStar } from "react-icons/bi"
import { LiaClock } from "react-icons/lia"

const Repositories = ({
    repos
}) => {

    return (
        <div className="mt-4 sm:mt-6 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {repos.map(repo => (
                <div key={repo.id} className="flex w-full flex-col border p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                        <BiGitBranch size={24} className="text-red-600 sm:size-8.75 shrink-0" />
                        <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold wrap">{repo.name}</h5>
                    </div>
                    <div className="mt-3 sm:mt-4">
                        <h5 className="text-sm sm:text-base lg:text-xl font-light wrap-break-words">{repo.description || "No description"}</h5>
                    </div>
                    <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                        {repo.language && (
                            <div className="flex items-center gap-1">
                                <LucideActivity size={16} className="text-red-600 sm:size-5" />
                                <h5 className="text-xs sm:text-sm lg:text-base font-light">{repo.language}</h5>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <BiStar size={16} className="sm:size-5" />
                            <h5 className="text-xs sm:text-sm lg:text-base font-light">{repo.stargazers_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiGitRepoForked size={16} className="text-red-600 sm:size-5" />
                            <h5 className="text-xs sm:text-sm lg:text-base font-light">{repo.forks_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiaClock size={16} className="sm:size-6" />
                            <h5 className="text-xs sm:text-sm lg:text-base font-light truncate">{repo.updated_at}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories