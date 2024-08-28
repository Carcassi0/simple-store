import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCard = ({ value }) => {
  const selector = value; // 구조 분해 할당을 통해 받은 value를 selector로 사용
  const [products, setProducts] = useState([]);
  let imageUrl;

  useEffect(() => {
    if (selector === 1) {
      axios.get('http://localhost:5000/beans')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    } else if (selector === 2) {
      axios.get('http://localhost:5000/coldbrew')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    } else if (selector === 3) {
      axios.get('http://localhost:5000/dripbag')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    } else if (selector === 4) {
      axios.get('http://localhost:5000/goods')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [selector]);

  // 임시 이미지 경로 설정
  if (selector === 1) {
    imageUrl = 'src/assets/rainbowgesha.jpeg';
  } else if (selector === 2) {
    imageUrl = 'src/assets/coldbrew.png';
  } else if (selector === 3) {
    imageUrl = 'src/assets/dripbag.png';
  } else if (selector === 4) {
    imageUrl = 'src/assets/rumodamo.jpeg';
  }

  return (
    <div className='product-column'>
      {products.map(product => (
        <div key={product.id} className="card-box">
          <div className="card-img-margin" style={{ height: '70%' }}>
            <div style={{ textAlign: 'center', height: '100%' }}>
              <img className="card-image" src={imageUrl} alt={product.name} />
            </div>
          </div>
          <div className="card-text-box">
            <p className="card-text">{product.name}</p>
            <p className="card-text" style={{ textAlign: 'right' }}>{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
