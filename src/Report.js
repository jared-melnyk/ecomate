import Button from "./Button";

const Report = (props) => {
  console.log("these are Report props: ", props);

  return (
    <div className="my-report-container">
      <h1>Here is your EcoMate Report</h1>
      <div id="report-container">
        {props.orderHistory.map((order) => (
          <div>
            <ul>
              {order.productsList.map((product) => (
                <li>Product Name: {product.productName}</li>
              ))}
            </ul>
            <h3>Total: ${order.total}</h3>
          </div>
        ))}
      </div>
      <Button toggleReport={props.toggleReport} showReport={props.showReport} />
    </div>
  );
};

export default Report;
