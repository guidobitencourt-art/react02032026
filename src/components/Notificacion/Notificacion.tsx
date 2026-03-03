interface NotificationProps {
    message: string;
    type: "success" | "warning" | "error";
}

const Notification = (props: NotificationProps) => {

    let styleClasses = "border-l-4 p-4 rounded "

    if (props.type === "success") {
        styleClasses += "bg-green-100 text-green-800 border-green-500"
    } 
    else if (props.type === "warning") {
        styleClasses += "bg-yellow-100 text-yellow-800 border-yellow-500"
    } 
    else if (props.type === "error") {
        styleClasses += "bg-red-100 text-red-800 border-red-500"
    }

    return (
        <div className={styleClasses}>
            <p>{props.message}</p>
        </div>
    )
}

export default Notification
