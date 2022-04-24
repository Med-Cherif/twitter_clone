interface IProps {
    Icon: any
}

const PostIcon = ({ Icon }: IProps) => {
    return (
        <Icon className="text-gray-500 dark:text-gray-200 text-xl cursor-pointer" />
    )
}

export default PostIcon