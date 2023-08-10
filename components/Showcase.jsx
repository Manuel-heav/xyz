import Profile from "./Profile"
import { GiSkullCrossedBones } from "react-icons/gi";
import { BsDatabaseFillAdd } from "react-icons/bs";
function Showcase() {
    return(
        <main className="bg-[#1a1b47] h-screen text-white w-5/6 md:ml-40">
            <div className="flex gap-20 m-10 justify-center align-middle">
                <div className="flex h-40 align-middle items-center w-50 p-5 bg-[#2e2870] mt-10 border-2 border-slate-400 rounded">
                <GiSkullCrossedBones className="text-7xl mr-3 text-[#b448ba]"/>
                <h1 className="text-xl">Danger for Company</h1>
                </div>

                <div className="flex align-middle items-center h-40 w-50 p-5 bg-[#2e2870] mt-10 border-2 border-slate-400 rounded">
                <BsDatabaseFillAdd className="text-7xl text-[#b448ba] mr-3"/>
                <div>
                    <h1 className="text-xl">Database</h1>
                    <p className="text-sm">Sponsor Company</p>
                </div>
                </div>
            </div>
            

            <div className="flex w-full gap-20 m-10 justify-center align-middle">
                <div className="">
                <button className="bg-[#a15afd] p-2 pl-9 pr-9 rounded-xl block">For More Experience</button>
                <button className="bg-[#a15afd] p-2 pl-9 pr-9 rounded-xl mt-5">Get Started With Us</button>
                </div>

                <div className="w-3/5">
                    <Profile profileLink="/profile1.jpg" title="Dreams Hack" time="1" />
                    <Profile profileLink="/profile.jpg" title="Angry Nerds" time="4"/>
                    <Profile profileLink="/profile2.jpg" title="Mind Install" time="1"/>
                    <Profile profileLink="/profile3.jpg" title="The Pseudo Bug Epic" time="1" />
                </div>
            </div>


            
        </main>
    )
}

export default Showcase
