import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';
import { cartContext } from '../context/Context';
import { useContext } from 'react';

function SingleProduct({ prod }) {

    const { cart, setCart } = useContext(cartContext);

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={prod.thumbnail} />
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                {
                    prod.description.length > 50 ? (
                        <Card.Text>{prod.description.substring(0, 35)} ...</Card.Text>
                    ) : (
                        <Card.Text>{prod.description}</Card.Text>
                    )
                }
                {
                    cart.includes(prod) ? (
                        <Button variant="primary" onClick={() => {
                            setCart(cart.filter((elem) => elem.id !== prod.id))
                        }}>Remover from cart</Button>

                    ) : (
                        <Button variant="primary" onClick={() => {
                            setCart([...cart, prod])
                        }}>Add to cart</Button>
                    )
                }
            </Card.Body>
        </Card>
    );
}

export default SingleProduct;