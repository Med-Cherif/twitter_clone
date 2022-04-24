import { BsThreeDots } from "react-icons/bs";
import PostIcon from "../Posts/PostIcon";

const Trend = () => {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-300 font-medium text-sm">Tranding in Algeria</span>
                <PostIcon Icon={BsThreeDots} />
            </div>
            <h2 className="text-black dark:text-white font-bold text-lg">WebDEV</h2>
            <p className="text-gray-500 dark:text-gray-300 font-semibold">100k Tweets</p>
        </div>
    )
}

export default Trend