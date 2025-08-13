export default function Cart({cart,increase,decrease}){
  return(
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>No item yet.</p>}
      {cart.map((item)=>(
        <div key={item.id} className="cart-item">
          <span className = "emoji">{item.image}</span>
          <span>{item.name}</span>
          <button onClick={() => decrease (item.id)}>-</button>
          <span className="quantity">{item.id}</span>
          <button onClick={() => increase(item.id)}>+</button>
          </div>
      ))}
    </div>
  );
}
  