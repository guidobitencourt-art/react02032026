import './StockBadge.css'

interface StockProps{
    productName: string;
    quantity: number;
}

const StockBadge = (props: StockProps) => {
    let classState = "normal"
    let message = `Stock: ${props.quantity}`

    if (props.quantity === 0){
        classState = "sold-out"
        message = "Producto Agotado"
    }else if(props.quantity <= 10){
        classState = "critical"
        message = `!Solo quedan ${props.quantity}`
    }



  return (
    <div className={`badge-container ${classState}`}>
        <strong>{props.productName}</strong>
        <p>{message}</p>
    </div>
  )
}

export default StockBadge