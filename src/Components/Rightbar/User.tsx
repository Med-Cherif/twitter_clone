const picture = require('../../assets/images/profile.jpeg');

const User = () => {
    return (
        <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 rounded-full" src={picture} alt="" />
                <div>
                    <h2 className="font-semibold dark:text-white">Mohamed Cherif</h2>
                    <h4 className="text-gray-500 font-semibold text-sm dark:text-gray-300">@mohamed_cherif</h4>
                </div>
            </div>
            <button className="px-4 py-2 rounded-full text-white bg-black dark:text-black dark:bg-white uppercase text-sm font-medium">Follow</button>
        </div>
    )
}

export default User