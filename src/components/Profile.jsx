import {BiCalendar,BiGitRepoForked,BiLogoPeriscope,BiUser,} from "react-icons/bi";
import { Users } from "lucide-react";

const Profile = ({ user }) => {
    function noBio() {
        if (user.bio === null) {
            return "N/A";
        }
        return user.bio;
    }

    function noLocation() {
        if (user.location === null) {
            return "N/A";
        }
        return user.location;
    }

    function noDate() {
        if (user.created_at === null) {
            return "N/A";
        }
        return user.created_at;
    }

    return (
        <>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full sm:mx-0 sm:h-40 sm:w-40 lg:h-60 lg:w-60">
                    <img src={user.avatar_url} alt="Profile" className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h4 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{user.login.toUpperCase()}</h4>
                    <h4 className="text-lg sm:text-xl lg:text-2xl">@{user.login}</h4>
                    <p className="mt-3 text-lg font-extralight sm:text-xl lg:text-3xl">{noBio()}</p>

                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-6">
                        <div className="flex items-center justify-center gap-1 sm:justify-start">
                            <BiLogoPeriscope size={25} />
                            <h5 className="text-base font-light sm:text-lg lg:text-2xl">{noLocation()}</h5>
                        </div>

                        <div className="flex items-center justify-center gap-1 sm:justify-start">
                            <BiCalendar size={20} />
                            <h5 className="text-base font-light sm:text-lg lg:text-2xl">{noDate()}</h5>
                        </div>
                    </div>
                    <a
                        href=""
                        target="_blank"
                        className="mt-3 w-max self-center rounded-full bg-black px-4 py-2.5 font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:text-black sm:self-start"
                    >
                        View Profile
                    </a>
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-b pb-6 sm:flex-row">
                <div className="flex w-full items-center justify-center gap-1 border px-4 py-2.5 text-black transition-all duration-300 hover:bg-black hover:text-white sm:w-1/3">
                    <Users className="text-sky-500" />
                    <h5 className="text-base font-bold sm:text-lg lg:text-2xl">{user.followers_url}</h5>
                </div>
                <div className="flex w-full items-center justify-center gap-1 border px-4 py-2.5 text-black transition-all duration-300 hover:bg-black hover:text-white sm:w-1/3">
                    <BiUser size={30} className="text-emerald-500" />
                    <h5 className="text-base font-bold sm:text-lg lg:text-2xl">{user.following_url}</h5>
                </div>
                <div className="flex w-full items-center justify-center gap-1 border px-4 py-2.5 text-black transition-all duration-300 hover:bg-black hover:text-white sm:w-1/3">
                    <BiGitRepoForked size={30} className="text-red-700" />
                    <h5 className="text-base font-bold sm:text-lg lg:text-2xl">{user.repos_url}</h5>
                </div>
            </div>
        </>
    );
};
export default Profile;
