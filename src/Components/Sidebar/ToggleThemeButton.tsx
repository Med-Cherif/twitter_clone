import { useGlobalState } from '../../AppProvider';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';


const ToggleThemeButton = () => {
    
    const { themeMode, toggleTheme } = useGlobalState()

    return (
        <div className='w-16 h-6 border border-black dark:border-white rounded-full relative'>
            <span 
                onClick={toggleTheme} 
                className={`${themeMode === 'dark' ? 'left-10' : 'left-0'} ${themeMode === 'dark' ? "dark" : ""} toggle-theme-btn cursor-pointer w-6 h-6 absolute top-0 rounded-full bg-black dark:bg-white flex items-center justify-center`}
            >
                {themeMode === 'dark' ? <MdOutlineNightlight /> : <MdOutlineLightMode className='text-white' />}
            </span>

        </div>
    )
}

export default ToggleThemeButton