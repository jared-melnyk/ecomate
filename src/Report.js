import MyButton from "./MyButton";
import { Container } from "@material-ui/core";

const Report = (props) => {
  console.log("these are Report props: ", props);

  return (
    <Container id="report-container">
      <h1>Here is your EcoMate Report</h1>
      <div>
        {props.orderHistory.map((order) =>
          order.productsList.length > 0 ? (
            <div>
              <h2>
                Order from {order.purchaseUrl} on {order.date}
              </h2>
              <ul>
                {order.productsList.map((product) => (
                  <div>
                    <li>
                      <img
                        src={product.imageUrl}
                        width={50}
                        height={50}
                        alt={""}
                      ></img>
                    </li>
                    <li>Product Name: {product.productName}</li>
                  </div>
                ))}
              </ul>
              <h3>Total: ${order.total}</h3>
            </div>
          ) : (
            <h4>You have no EcoMate shopping history.</h4>
          )
        )}
      </div>
      <MyButton
        toggleReport={props.toggleReport}
        showReport={props.showReport}
      />
    </Container>
  );
};

export default Report;
