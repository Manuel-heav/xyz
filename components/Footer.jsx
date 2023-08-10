import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube, SlSocialTwitter,SlSocialFacebook  } from "react-icons/sl";
function Header() {
    return (
        <footer className=" bg-dark-2 px-10 py-8 bg-[#2e2870] text-white w-5/6 md:ml-40">
            <div  className="flex items-center justify-between" >
            <div>
                <h1>XYZ Company</h1>
                <p className="mt-2 mb-2">Follow us</p>
                <div className="flex gap-4">
                    <SlSocialInstagram className="text-2xl"/>
                    <SlSocialYoutube className="text-2xl"/>
                    <SlSocialLinkedin className="text-2xl"/>
                    <SlSocialTwitter className="text-2xl"/>
                    <SlSocialFacebook className="text-2xl"/>
                </div>
            </div>

            <div>
                <h2 className="text-center mb-5">Explore</h2>
                <div className="flex gap-10">
                    <div>
                        <p className="text-[#807bb4]">Terms and Condition</p>
                        <p className="text-[#807bb4]">About Us</p>
                    </div>
                    <div>
                        <p className="text-[#807bb4]">Privacy and Policy</p>
                        <p className="text-[#807bb4]">Blog</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mb-2">Subscribe to Our Newsletter</h2>
                <p  className="text-[#807bb4]">Get Exclusive promotions & updates</p>
                <p  className="text-[#807bb4]">straight to your inbox</p>

                <div class="mb-3 mt-3">
                            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                type="search"
                                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.3rem] text-sm font-normal leading-[1.6] text-black outline-none rounded-l-xl "
                                placeholder="Enter your Email here"
                                aria-label="Search"
                                aria-describedby="button-addon1" />
                                <button
                                class="relative z-[2] flex items-center bg-[#a259ff] px-2 py-3 text-xs font-medium uppercase leading-tight text-white shadow-md tt rounded-r-xl"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Subscribe
                                </button>
                            </div>
                        </div>
            </div>
            </div>
            <hr className="mt-5 text-[#595592]"/>
            <p className="text-center mt-5  text-[#807bb4]">&copy; 2023 XYZ Company</p>
        </footer>
    )

}

export default Header