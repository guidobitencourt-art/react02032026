import './PlanCard.css'

interface PlanProps {
    name: string;
    price: number;
    isPopular: boolean;
}

const PlanCard = (props: PlanProps) => {

    let classState = "plan-normal"
    let badgeText = ""

    if (props.isPopular) {
        classState = "plan-popular"
        badgeText = "Recommended"
    }

    return (
        <div className={`plan-container ${classState}`}>
            {props.isPopular && <span className="popular-badge">{badgeText}</span>}
            
            <strong>{props.name}</strong>
            <p>${props.price} / month</p>
        </div>
    )
}

export default PlanCard
