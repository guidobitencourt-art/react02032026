import './App.css'
import PlanCard from './components/PlanCard'

function App() {
  return (
    <div className="plans-wrapper">
      <PlanCard name="Basic" price={9} isPopular={false} />
      <PlanCard name="Pro" price={19} isPopular={true} />
      <PlanCard name="Enterprise" price={39} isPopular={false} />
    </div>
  )
}

export default App
