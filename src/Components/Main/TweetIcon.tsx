

interface IProps {
    Icon: any
}

const TweetIcon = ({ Icon }: IProps) => {
    return (
        <Icon className="text-primary text-xl" />
    )
}

export default TweetIcon