interface NotificationsProps {
    message: string;
    type: 'success' | 'alert' | 'error'
}

const Notifications = (props: NotificationsProps) => {
    const styles = {
        success: 'bg-green-100 border-green-500 text-green-700',
        alert: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700'
    }
  return (
    <div className={`border-l-4 p-4 my-3 rounded-md shadow-sm ${styles[props.type]}`}>
        <p className="font-bold capitalize">{props.type}</p>
        <p className="text-sm">{props.message}</p>
    </div>
  )
}

export default Notifications