import Post from '../Posts/Post'
import Tweet from './Tweet'

const Main = () => {
    return (
        <div className='main border border-gray-500 border-y-0 h-screen overflow-auto'>
            <div className="main-wrapper">
                <Tweet />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Main