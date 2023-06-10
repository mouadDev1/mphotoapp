import React from 'react';
//useFetch hook
import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider';
//components


const RelatedProducts = ({categoryTitle}) => {
  // get products by category title
  const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);
  return( <div className='mb-16'>
      <h2 className='h2 mb-6 text-center xl:text-left'>Related Products</h2>
      <ProductSlider data={data} />
  </div>
  );
};

export default RelatedProducts;
