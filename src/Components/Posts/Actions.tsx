import { VscComment } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import PostIcon from "./PostIcon";

const Actions = () => {
    return (
        <div className='w-11/12 flex justify-between items-center mt-3'>
            <PostIcon Icon={VscComment} />
            <PostIcon Icon={GiCycle} />
            <PostIcon Icon={AiOutlineHeart} />
            <PostIcon Icon={MdFileDownload} />
        </div>
    )
}

export default Actions