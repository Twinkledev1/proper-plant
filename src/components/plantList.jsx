export default function PlantList({ plants, addToCart }) {
  return(
    <div className="products">
      <h1>Proper Plant</h1>
      <div className="product-grid">
        {plants.map((plant)=>(
          <div key={plant.id} className="product-card">
            <div className="emoji">{plant.image}</div>
            <h3>{plant.name}</h3>
            <button onClick={() => addToCart(plant)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}