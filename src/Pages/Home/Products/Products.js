import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hook/useProducts';

const Products = () => {
    const {products} = useProducts();
    const [type, setType] = useState('phone');
    const handleType = (type)=>{
        setType(type);
    }
    return (
        <Container className='mt-5'>
            <h2>Products :{products.length}</h2>
            <h4>Products by catagories</h4>
            <Row className='gy-3 mt-3 mb-5' md={4}>
                <Col>
                <button onClick={()=>handleType('phone')} className='btn btn-outline-info'>Phone</button>
                </Col>
                <Col>
                <button onClick={()=>handleType('accessories')} className='btn btn-outline-info'>Accessories</button>
                </Col>
                <Col>
                <button onClick={()=>handleType('camera')} className='btn btn-outline-info'>Camera</button>
                </Col>
                <Col>
                <button onClick={()=>handleType('tv')} className='btn btn-outline-info'>Tv/Monitor</button>
                </Col>
                </Row>
            <Row className='gap-5 justify-content-center my-5'>
                {
                    products.filter(item=>item.type === type).map(product=><Col key={product.id} md={3} lg={3} sm={1} xs={1}>
                        <Card style={{ width: '18rem',height:'400px', padding:'30px' }}>
  <Card.Img variant="top" src={product.img} height="200px" />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      ${product.price}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                    </Col>)
                }
                {/* {
                    products.map(product=> <Col md={3} lg={3} sm={1} xs={1}>
                        <Card style={{ width: '18rem',height:'400px', padding:'30px' }}>
  <Card.Img variant="top" src={product.img} height="200px" />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      ${product.price}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                    </Col>)
                } */}
            </Row>
        </Container>
    );
};

export default Products;