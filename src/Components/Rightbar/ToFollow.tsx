import ShowMoreButton from '../ShowMoreButton'
import User from './User'

const ToFollow = () => {
    return (
        <div className='rounded-xl dark:bg-gray-500 bg-slate-300 p-4'>
            <h2 className='font-semibold text-xl dark:text-white'>Who to follow</h2>
            <User />
            <User />
            <ShowMoreButton />
        </div>
    )
}

export default ToFollow