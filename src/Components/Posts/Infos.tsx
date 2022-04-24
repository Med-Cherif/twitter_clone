import { BsThreeDots } from "react-icons/bs";

const Infos = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <span className="text-black font-bold text-base dark:text-white">Mohamed Cherif</span>
                <span className="text-gray-500 font-bold mx-2">@mohamedcherif_21</span>
                <span className="text-gray-500 font-bold">1h</span>
            </div>
            <BsThreeDots className="text-2xl text-gray-500 cursor-pointer" />
        </div>
    )
}

export default Infos