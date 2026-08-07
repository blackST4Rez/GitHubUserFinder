import { LucideActivity } from "lucide-react"
import { BiGitBranch, BiGitRepoForked, BiStar } from "react-icons/bi"
import { LiaClock } from "react-icons/lia"

const Repositories = ({
    repos
}) => {

    return (
        <div className="grid grid-cols-2 gap-5 mt-6 mb-5">
            {repos.map(repo => (
                <div key={repo.id} className="w-full flex flex-col border p-5">
                    <div className="flex gap-1 items-center justify-start text-2xl">
                        <BiGitBranch size={35} className="text-red-600" />
                        <h5 className="font-bold text-4xl">{repo.name}</h5>
                    </div>
                    <div className="items-center justify-start flex-wrap mt-4">
                        <h5 className="font-light text-2xl">{repo.description}</h5>
                    </div>
                    <div className="flex items-center justify-start mt-4 gap-4">
                        <div className="flex items-center gap-1">
                            <LucideActivity size={20} className="text-red-600" />
                            <h5 className="font-light text-xl">{repo.language}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiStar size={20} className="transition-all animate-spin" />
                            <h5 className="font-light text-xl">{repo.stargazers_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <BiGitRepoForked size={20} className="text-red-600" />
                            <h5 className="font-light text-xl">{repo.forks_count}</h5>
                        </div>
                        <div className="flex items-center gap-1">
                            <LiaClock size={25} />
                            <h5 className="font-light text-xl">{repo.updated_at}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories