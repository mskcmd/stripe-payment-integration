import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi"; // Import the cart icon
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PwFKXBBCrEZsEp78GSAbsmHwIELrCPR7TdBjegsksEafGy5JThFba9DLSVQUFhpmCiHQGhG0c8rJ5yOA4TqdZ2b00AM6XnuOe"
);
function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const ExistProduct = cart.find((item) => item.id === product.id);
    if (ExistProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch(
        "http://localhost:4000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cart }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>Simple Store</h1>
          <div className="cart-icon">
            <FiShoppingCart size={30} color="white" />
            <span className="cart-badge">{cart.length}</span>
          </div>
        </header>

        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price / 100}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity) / 100}</p>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <button onClick={handleCheckout}>Checkout</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
