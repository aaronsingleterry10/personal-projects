import React, {useEffect} from 'react';

export function Cart(props) {
    const {item, removeItem, handleValueChange} = props;
    // This is tied to the removeItem function from App.js that removes the item from cart
    const handleRemoveItem = () => {
        removeItem(item.id);
    }
    // This is tied to the handleValueChange from App.js that adds or subtracts the quantity of the item
    const handleChange = ({target}) => {
        // console.log(target.value, item.quantity, item.id);
        handleValueChange(item.id, target.value);

    }

    return (
        <li className="list-group-item c-flex p-4">
            <div className="c-img">
                <img
                    src={item.image}
                    alt={item.name}
                    className="mr-2"
                />
                <div>
                    {item.name}
                </div>
            </div>
            <div className="input-group input-group-sm c-input">
                <span className="input-group-text">Qty</span>
                <input
                    type="number"
                    min="0"
                    className="form-control"
                    onChange={handleChange}
                    aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span className="input-group-text">x ${item.price}</span>
                <button
                    className="btn btn-dark ml-2 remove-button"
                    aria-label="Remove item"
                    onClick={handleRemoveItem}
                ><i className="far fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}