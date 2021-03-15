import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel,  Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import LoadingSpinner from '../components/LoadingSpinner';
// import Message from '../components/Message';
import * as productActions from '../store/actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  // const productTopRated = useSelector((state) => state.productTopRated);
  // const { loading, error } = productTopRated;
  // const products = productTopRated.products || [];

  useEffect(() => {
    dispatch(productActions.listTopProducts());
  }, [dispatch]);

  return <Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pbs.twimg.com/media/EvXDGy5WYAIReHL?format=jpg&name=4096x4096"
      alt="Third slide"
    />

<Carousel.Caption className="captionh3">
     {/*  <h3 > Do NOT Limit your challenges , Challenge your limit </h3> */}
      
      <Button className= "singinuser" ><a href="#shop"  className= "singinuser"> SHOP NOW </a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4498609/pexels-photo-4498609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption className="captionh3">
      <h3 > Commit to be Fit At HOME </h3>
      
  <Button className= "singinuser" ><a href="#shop"  className= "singinuser"> SHOP NOW </a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://images.pexels.com/photos/6740753/pexels-photo-6740753.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="Second slide"
    />

    <Carousel.Caption className="captionh3">
      <h3 > Fitness is not a Destination , it is a WAY of Life </h3>
      
  <Button className= "singinuser" ><a href="#shop"  className= "singinuser"> SHOP NOW </a></Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
};

export default ProductCarousel;
