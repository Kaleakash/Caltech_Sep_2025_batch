import React, { useState, useEffect } from "react";

const GrocerryComponent = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch("http://localhost:3000/products");
        const ordersResponse = await fetch("http://localhost:3000/orders");
        const usersResponse = await fetch("http://localhost:3000/users");

        const productsData = await productsResponse.json();
        const ordersData = await ordersResponse.json();
        const usersData = await usersResponse.json();

        setProducts(productsData);
        setOrders(ordersData);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Grocery Details</h1>

      <section>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category} - ${product.price}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.orderId}>
              Order ID: {order.orderId}, User ID: {order.userId}, Product ID: {order.productId}, Quantity: {order.quantity}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              {user.name} - {user.email} - {user.address}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GrocerryComponent;