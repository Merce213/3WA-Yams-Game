import Star from "../assets/star.png";

const Reward = ({ reward }) => {
    console.log(reward.name)
    return (
        <div className="flex items-center gap-4 font-yams-cherry text-base tracking-wide">
            <img
                src={Star}
                alt="star icon"
                className="w-10 h-10"
            />
            <div className="flex space-x-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF2E00] to-[#FFD600]">
                    1
                </span>
                <p>{reward.name}</p>
            </div>
        </div>
    )
}

export default Reward;