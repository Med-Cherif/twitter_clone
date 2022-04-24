import ToggleThemeButton from "./ToggleThemeButton";
import { AiOutlineHome } from "react-icons/ai";
import { BsFullscreenExit, BsEnvelope, BsBookmarks, BsCardList, BsPerson } from "react-icons/bs";
import { IoMdClose } from "react-icons/io"
import { MdOutlineMore } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { IoNotificationsOutline } from "react-icons/io5"
import { useGlobalState } from "../../AppProvider";
const items = [
    ['home', <AiOutlineHome />],
    ['explore', <BsFullscreenExit />],
    ['notifications', <IoNotificationsOutline />],
    ['messages', <BsEnvelope />],
    ['bookmarks', <BsBookmarks />],
    ['lists', <BsCardList />],
    ['profile', <BsPerson />],
    ['more', <MdOutlineMore />],
]

const Sidebar = () => {
    const { closeSidebar, sidebarIsOpen } = useGlobalState()
    return (
        <div className={`${sidebarIsOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 py-4 transition-[transform] duration-300 fixed top-0 left-0 w-60 h-full dark:bg-gray-900 bg-white md:static md:w-fit`}>
            <div className="flex items-center justify-between px-4 md:px-0">
                <ToggleThemeButton />
                <IoMdClose onClick={closeSidebar} className="md:hidden cursor-pointer text-2xl dark:text-white" />
            </div>
            <ul>
                {items.map(([text, Icon]: any) => (
                    <SidebarItem key={text} text={text} Icon={Icon} />
                ))}
            </ul>
        </div>
    )
}

export default Sidebar