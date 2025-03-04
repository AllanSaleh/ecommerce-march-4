import { Product } from '../../types/types';
import './ProductCard.css';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const styles = {
    productCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
    },
    productImage: {
      width: '100px',
      height: '100px',
    },
  };

  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={styles.productImage}
      />
      <p>{product.description}</p>
    </div>
  );
};
export default ProductCard;
