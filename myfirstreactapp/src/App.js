import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Cart} from "./Cart";
// import './App.css';
import {Button} from 'reactstrap';
import {Checkout} from "./Checkout";

function App(props) {
    // const [newItem, setNewItem] = useState({});
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "T-Shirt",
            price: 15,
            quantity: 0,
            image: "shirt.jpeg"
        },
        {
            id: 2,
            name: "Denim Jeans",
            price: 60,
            quantity: 0,
            image: "jeans.jpeg"
        },
        {
            id: 3,
            name: "Shoes",
            price: 50,
            quantity: 0,
            image: "shoes.jpeg"
        },
    ]);
    const [myCartTotal, setMyCartTotal] = useState(0);
    // This function adds or subtracts the quantity of the items set from the input
    const handleValueChange = (itemIdToChange, newQty) => {
        cart.forEach((item) => {
            if (item.id === itemIdToChange) {
                item.quantity = newQty;
            }
        });

        setCart(cart)
        cartTotal();
    };
    // This function deletes item from shopping cart when the "Remove" button is clicked
    const removeItem = (itemIdToRemove) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemIdToRemove))
    }
    // This function calculates the total of cart
    const cartTotal = () => {
        let total = 0;
        for (let i in cart) {
            total += (cart[i].quantity * cart[i].price);
        }
        setMyCartTotal(total);
        console.log("my cart test")
    }
    // This function displays the checkout screen when the "Checkout" button is clicked
    const proceedToCheckout = (e) => {
        e.preventDefault();
        document.getElementById("checkout-form").innerHTML = `
            <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="ex: John Ray Doe" required=""/>
                        <small class="text-muted">Full name as displayed on card</small>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="1234 5678 9012 3456" required=""/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="MM/YYYY" required=""/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="123" required=""/>
                    </div>
                </div>
                <hr class="mb-4"/>
                <button class="btn btn-dark btn-lg btn-block" type="submit">Continue to checkout</button>
       `
    }
    // });
    return (
        <div className="App">
            <div className="container">
                <form>
                    <div className="card mt-4">
                        <div className="card-header bg-dark text-white">
                            <h4>Shopping Cart</h4>
                        </div>

                        <ul className="list-group list-group-flush items">
                            {cart.map((item) => (
                                <Cart
                                    cartTotal={cartTotal}
                                    removeItem={removeItem}
                                    key={item.id}
                                    item={item}
                                    handleValueChange={handleValueChange}
                                />
                            ))}
                            <li className="list-group-item c-button-price">
                                <button
                                    id="submit-form"
                                    onClick={proceedToCheckout}
                                    className="btn btn-dark btn-lg m-2"
                                >Checkout
                                </button>
                                <h4 className="total m-3">Total: ${myCartTotal}</h4>
                            </li>
                        </ul>
                    </div>
                    <div id="checkout-form" className="mt-3"></div>
                </form>
            </div>
        </div>
    );
}

export default App;
