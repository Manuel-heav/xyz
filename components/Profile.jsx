import Image from "next/image"

function Profile({profileLink, time, title}) {
    return(
        <section className="flex mb-5  bg-[#31306a] p-3 rounded-lg  align-center justify-between">
            <div className="flex align-center ">
                <Image src={profileLink} width="30" height="30" className="rounded-full mr-2 w-10 h-10"/>
                <h2 className="text-sm">{title}</h2>
            </div>
            <p className="text-sm">Starts {time}:00 PM</p>
            <button className="bg-[#a15afd] p-2 pl-7 pr-7 rounded-xl w-1/5 text-sm">Contact</button>
        </section>
    )
}   

export default Profile