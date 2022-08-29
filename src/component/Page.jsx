import Header from "./header";
import RightContent from "./rightContent";
import Shorting from "./Shorting";
import SideBar from "./SideBar";
const Page = () => {

    return (
        <>
            <div className="relative">
                <Header />
                <div className=" z-30 flex py-5 pl-5 ">
                    <SideBar />
                    <div className=" overflow-auto h-screen grid grid-cols-4 gap-4 px-2 w-full">
                        <Shorting />
                        <RightContent />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page;

