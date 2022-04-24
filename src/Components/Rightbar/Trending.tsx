import ShowMoreButton from '../ShowMoreButton'
import Trend from './Trend'

const Trending = () => {
    return (
        <div className='dark:bg-gray-500 bg-slate-300 rounded-br-xl rounded-bl-xl py-8 px-4 my-4'>
            <Trend />
            <Trend />
            <Trend />
            <ShowMoreButton />
        </div>
    )
}

export default Trending