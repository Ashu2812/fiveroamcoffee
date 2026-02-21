import { useState } from "react";

const coffees = [
  { id:1, name:"Bison Valley Estate", price:525 },
  { id:2, name:"Stanmore Estate", price:525 },
  { id:3, name:"Hidden Falls Estate", price:525 },
  { id:4, name:"Orchardale Estate", price:525 },
  { id:5, name:"Bison Valley Brown Sugar", price:525 },
  { id:6, name:"Moganad Estate", price:525 },
  { id:7, name:"Stanmore Watermelon", price:525 },
  { id:8, name:"Orchardale Hazelnut", price:525 }
];

export default function Coffees() {
  const [cart,setCart] = useState([]);

  const addToCart = (coffee)=>{
    setCart([...cart,coffee]);
  };

  const total = cart.reduce((sum,item)=>sum+item.price,0);
  const discount = cart.length>=2 ? total*0.2 : 0;
  const final = total-discount;

  return(
    <div style={{background:"#F5F1E8",padding:"40px"}}>
      <h1>Our Coffees</h1>

      {coffees.map(c=>(
        <div key={c.id} style={{marginBottom:"20px"}}>
          <h3>{c.name}</h3>
          <p>₹{c.price}</p>
          <button onClick={()=>addToCart(c)}>Add</button>
        </div>
      ))}

      <hr/>
      <h2>Cart</h2>
      <p>Total: ₹{total}</p>
      <p>Discount: ₹{discount}</p>
      <h3>Final: ₹{final}</h3>
    </div>
  );
}
