import { useState } from 'react';
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfilCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import type { Product, User } from './types';

const users: User[] = [
  {
    id: '1',
    name: 'Haida Makouangou',
    email: 'H.Mack@gmail.com',
    role: 'AI Engineer',
    avatarUrl: 'https://img.freepik.com/free-icon/user_318-159711.jpg'
  },
  {
    id: '2',
    name: 'Joel Kusa',
    email: 'J.k@yahoo.com',
    role: 'Software Engineer',
    avatarUrl: 'https://img.freepik.com/free-icon/user_318-159711.jpg'
  }
];

const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://m.media-amazon.com/images/I/611HgzxtH2L._UF894,1000_QL80_.jpg',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone X200',
    price: 799.99,
    description: 'Next-gen smartphone with excellent camera and performance.',
    imageUrl: 'https://pdaplaza.com/cdn/shop/files/buy-vivo-x200-pro-mini-5g-dual-sim-16gb-1tb-powder-pink-cn-version-smartphone-943.webp?v=1737413879',
    inStock: false
  },
  {
    id: '3',
    name: 'USB-C to HDMI Adapter',
    price: 14.99,
    description: 'Easily connect your USB-C laptop to an external HDMI monitor in stunning 4K.',
    imageUrl: 'https://m.media-amazon.com/images/I/61kv7aTqB0L.jpg',
    inStock: true
  }
];

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-center mb-10">Components Library</h1>

       {/* ALERT BOX SECTION */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Alert Box</h2>
        <AlertBox type="success" message="Success Alert" />
        <AlertBox type="error" message="Error Alert" />
        <AlertBox type="info" message="Info Alert" />
        <AlertBox type="warning" message="Warning Alert" />
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            <p className="text-sm">You can now continue using the application.</p>
          </AlertBox>
        )}
      </section>

      {/* USER PROFILES */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">User Profiles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user) => (
            <UserProfileCard
              key={user.id}
              user={user}
              showEmail
              showRole
              onEdit={(userId) => alert(`Editing user ${userId}`)}
            >
              <div className="text-sm text-gray-500">Last login: Just now</div>
            </UserProfileCard>
          ))}
        </div>
      </section>

      {/* PRODUCT DISPLAY */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductDisplay
              key={product.id}
              product={product}
              showDescription
              showStockStatus
              onAddToCart={handleAddToCart}
            >
              <p className="text-sm text-gray-500">Free shipping on orders over $50</p>
            </ProductDisplay>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
