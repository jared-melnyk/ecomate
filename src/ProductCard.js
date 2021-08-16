import { Container, Card } from "@material-ui/core";
import { displayPrice } from "./Utils";

const ProductCard = (props) => {
  console.log("these are ProductCard props: ", props);
  const { product } = props;
  const prettyPrice = displayPrice(product.salePrice);
  return (
    <Container id="product-card-container">
      <li>
        {product.productName} - ${prettyPrice}
      </li>
    </Container>
  );
};

export default ProductCard;
