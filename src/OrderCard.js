import { Container, Card } from "@material-ui/core";
import ProductCard from "./ProductCard";

const OrderCard = (props) => {
  console.log("these are OrderCard props: ", props);
  const { order } = props;

  return (
    <Container id="order-card-container">
      {order.productsList.length > 0 ? (
        <div>
          <h2>
            Order from {order.purchaseUrl} on {order.date}
          </h2>
          <ul>
            {order.productsList.map((product) => (
              <ProductCard product={product} />
            ))}
          </ul>
          <h3>Total: ${order.total}</h3>
        </div>
      ) : (
        <h4>You have no EcoMate shopping history.</h4>
      )}
    </Container>
  );
};

export default OrderCard;
