import './App.css'
import StockBadge from './components/StockBadge/StockBadge'
import PlanCard from './components/PlanCard/PlanCard'
import Notification from "./components/Notification/Notification"



// function App() {
//   return (
//     <>
//       {/* <PlanCard name="Basic" price={9} isPopular={false} />
//       <PlanCard name="Pro" price={19} isPopular={true} />
//       <PlanCard name="Enterprise" price={39} isPopular={false} /> */}

//       {/* <StockBadge productName="Teclado Mecánico" quantity={0} />
//       <StockBadge productName="Mouse Gamer" quantity={5} />
//       <StockBadge productName="Monitor 24 pulgadas" quantity={25} /> */}
//     </>
//   )
// }

// export default App



function App() {
  return (
    <div className="flex flex-col gap-4 p-10">

      <Notification 
        type="success" 
        message="Operation completed successfully!" 
      />

      <Notification 
        type="warning" 
        message="Be careful! Check your data before continuing." 
      />

      <Notification 
        type="error" 
        message="An error occurred. Please try again." 
      />

    </div>
  )
}

export default App

