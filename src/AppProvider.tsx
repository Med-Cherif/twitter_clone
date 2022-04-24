import { useContext, createContext, useState, useEffect } from 'react';

const AppContext = createContext({});

function getThemeMode() {
    const mode = localStorage.getItem('mode') as null | 'light' | 'dark';
    if (!mode) return 'light';
    return mode
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => getThemeMode());
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const openSidebar = () => setSidebarIsOpen(true);
    const closeSidebar = () => setSidebarIsOpen(false);

    const toggleTheme = () => {
        setThemeMode(prev => {
            if (prev === 'dark') {
                return 'light'
            }
            return 'dark';
        })
    }

    useEffect(() => {
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('mode', themeMode);
    }, [themeMode])

    return (
        <AppContext.Provider value={{
            themeMode, toggleTheme, sidebarIsOpen, openSidebar, closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

interface GlobalState {
    themeMode: 'light' | 'dark';
    toggleTheme: () => void;
    sidebarIsOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState
}