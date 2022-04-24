import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import TweetIcon from "./TweetIcon";

const Picture = require("../../assets/images/profile.jpeg");


const Tweet = () => {
    return (
        <div className='p-3 pb-4 border-b border-gray-500'>
            <h2 className="text-xl text-black font-medium dark:text-white mb-2">Home</h2>
            <div className="flex gap-4">
                <div>
                    <img className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full object-cover" src={Picture} alt="" />
                </div>
                <div className="flex-1">
                    <textarea 
                        rows={2}
                        placeholder="What's happening"
                        className="resize-none border-none outline-none p-1 dark:bg-gray-900 w-full bg-white text-black dark:text-white placeholder:text-lg placeholder:font-medium"
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <TweetIcon Icon={BsCardImage} />
                            <TweetIcon Icon={AiOutlineFileGif} />
                            <TweetIcon Icon={BsEmojiSmile} />
                            <TweetIcon Icon={BiCalendarEvent} />
                        </div>
                        <button className="bg-primary text-white rounded-full py-2 px-4 w-28 uppercase font-medium text-sm">Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet