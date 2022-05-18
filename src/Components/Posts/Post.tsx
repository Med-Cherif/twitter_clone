
import Actions from "./Actions";
import Infos from "./Infos";
const Picture = require("../../assets/images/profile.jpeg");


const Post = () => {
    return (
        <div className='p-3 pb-4 border-b border-gray-500'>
        <div className="flex gap-3">
            <div className='min-w-[48px]'>
                <img className="w-12 h-12 rounded-full object-cover" src={Picture} alt="" />
            </div>
            <div className="flex-1">
                <Infos />
                <p className="dark:text-white font-medium">Please make sure you like and follow me for more content</p>
                <Actions />
            </div>
        </div>
    </div>
    )
}

export default Post