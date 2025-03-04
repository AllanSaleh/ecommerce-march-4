import { useEffect, useState } from 'react';
import { Category, Product } from '../../types/types';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';
import { useProductContext } from '../../context/ProductContext';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../../api/api';
import Footer from '../../components/Footer';

const Home = () => {
  const { products, dispatch, selectedCategory } = useProductContext();

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    if (productsData) {
      dispatch({ type: 'SET_PRODUCTS', payload: productsData.data });
    }
  }, [dispatch, productsData]);

  const getFilteredProducts = () => {
    if (selectedCategory) {
      return products?.filter(
        (product: Product) => product.category === selectedCategory
      );
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })
        }
      >
        <option value=''>All Categories</option>
        {categories?.data.map((category: Category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <div className='container'>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h2>{isError}</h2>}
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
