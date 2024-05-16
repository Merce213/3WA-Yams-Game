import Reward from "./Reward";

const RewardsList = ({ rewards }) => {
    return (
        <div className="flex flex-col gap-4">
           {rewards.length !== 0 && (rewards.map((reward, index) => (
                <div key={index} style={{animation: `fadeIn 0.5s both ${index * 0.5}s`}} className="animate">
                    <Reward reward={reward} />
                </div>
            )))}
        </div>
    )
}

export default RewardsList;