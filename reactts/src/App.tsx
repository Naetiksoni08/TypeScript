import './App.css'
import { ChaiCard } from './Components/ChaiCard.tsx'
import { ChaiList } from './Components/ChaiList.tsx';
import { Counter } from './Components/Counter.tsx'
import { OrderForm } from './Components/OrderForm.tsx';
import type { Chai } from './Types.ts';
import { Card } from './Components/Card.tsx';

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 60 }
]


function App() {
  return (
    <>
      <div>
        <ChaiCard name="HeadPhones" price={5000} />
        <ChaiCard name="Iphone" price={80000} />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <ChaiList item={menu} />
      </div>
      <div>
        <OrderForm onSubmit={(order) =>
          console.log("Order Placed", order.name + " " + order.cups)
        } />
      </div>
      <div>
        <Card title={"Chai aur TypeScript"}
        footer={<button>Order</button>}/>
      </div>
    </>
  );
}

export default App

