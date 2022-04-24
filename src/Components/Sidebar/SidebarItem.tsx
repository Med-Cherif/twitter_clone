
interface IProps {
    text: string;
    Icon: JSX.Element;
}

const SidebarItem = ({ text, Icon }: IProps) => {
    return (
        <li 
            className="p-2 md:justify-center lg:justify-start flex items-center gap-3 mt-3 rounded cursor-pointer hover:bg-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 dark:hover:bg-white"
        >
            <div className="sidebar-icon">
                {Icon}
            </div>
            <span className="capitalize text-lg font-semibold md:hidden lg:block">{text}</span>
        </li>
    )
}

export default SidebarItem