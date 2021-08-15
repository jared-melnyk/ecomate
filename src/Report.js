import MyButton from "./MyButton";
import { Container } from "@material-ui/core";

const Report = (props) => {
  console.log("these are Report props: ", props);

  return (
    <div className="my-report-container">
      <h1>Here is your EcoMate Report</h1>
      <Container id="report-container">
        {props.orderHistory.map((order) =>
          order.productsList.length > 0 ? (
            <div>
              <h2>
                Order from {order.purchaseUrl} on {order.date}
              </h2>
              <ul>
                {order.productsList.map((product) => (
                  <li>Product Name: {product.productName}</li>
                ))}
              </ul>
              <h3>Total: ${order.total}</h3>
            </div>
          ) : (
            <h4>You have no EcoMate shopping history.</h4>
          )
        )}
      </Container>
      <MyButton
        toggleReport={props.toggleReport}
        showReport={props.showReport}
      />
    </div>
  );
};

export default Report;
