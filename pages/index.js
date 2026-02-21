import Link from "next/link";

export default function Home() {
  return (
    <div style={{background:"#F5F1E8",minHeight:"100vh",textAlign:"center",padding:"80px"}}>
      <h1>FiveRoamCoffee</h1>
      <h2>From South Indian Estates to Your Cup</h2>
      <p>Single Origin. Small Batch. Estate Driven.</p>

      <Link href="/coffees">
        <button style={{padding:"10px 20px",marginTop:"20px"}}>
          Shop Our Coffees
        </button>
      </Link>
    </div>
  );
}
