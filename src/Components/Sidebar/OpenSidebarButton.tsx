import React from 'react'
import { useGlobalState } from '../../AppProvider'

const OpenSidebarButton = () => {
    const { openSidebar } = useGlobalState()
    return (
        <div onClick={openSidebar} className='md:hidden fixed cursor-pointer right-3 bottom-3 bg-primary rounded-full flex justify-center items-center w-16 h-16 text-white'>
            <span className='font-bold text-xs text-white'>Navigation</span>
        </div>
    )
}

export default OpenSidebarButton