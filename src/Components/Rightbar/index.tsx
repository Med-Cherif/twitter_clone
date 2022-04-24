import ToFollow from "./ToFollow"
import Trending from "./Trending"

const Rightbar = () => {
    return (
        <div className='py-4 md:col-span-full lg:col-auto'>
            <div>
                <input 
                    type="text" 
                    className='border-none outline-none py-1 px-4 w-full h-10 dark:bg-gray-500 bg-slate-300 text-black dark:text-white placeholder:text-lg placeholder:font-medium rounded-full fixed lg:static' 
                    placeholder='Search Twitter'
                />
            </div>
            <Trending />
            <ToFollow />
        </div>
    )
}

export default Rightbar