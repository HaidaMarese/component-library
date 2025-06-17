import type { ProductDisplayProps } from '../../types';

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children
}) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white p-4">
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-contain mx-auto" />}
      <div className="mt-2">
        <h2 className="text-xl font-bold text-center">{product.name}</h2>
        <p className="text-lg text-green-600 font-semibold text-center">${product.price.toFixed(2)}</p>
        {showDescription && <p className="mt-2 text-sm text-gray-600 text-center">{product.description}</p>}
        {showStockStatus && (
          <p className={`text-center font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        )}
        {onAddToCart && (
          <div className="text-center mt-3">
            <button
              onClick={() => onAddToCart(product.id)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        )}
        <div className="mt-2 text-center">{children}</div>
      </div>
    </div>
  );
};

export default ProductDisplay;