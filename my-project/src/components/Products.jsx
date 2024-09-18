import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-wrap justify-evenly'>
      {loader ? (
        <Loader />
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className='w-[200px] rounded-md border object-fill py-4 space-x-5 space-y-5'
          >
            <img
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className='h-[200px] w-full rounded-md object-cover'
            />
            <h1>{product.title}</h1>
            <p className='font-semibold'>${product.price}</p>
            <button className='mt-4 rounded-md bg-black px-4 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
