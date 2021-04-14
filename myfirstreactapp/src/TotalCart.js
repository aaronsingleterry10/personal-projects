import React, {useState, useEffect} from 'react';
import {Cart} from "./Cart";

export function TotalCart(props) {
    const {calcCartTotal, setCalcCartTotal} = props;

    // useEffect(() => {
    //     handleCalcCartTotal()
    // }, [calcCartTotal])

    const handleCalcCartTotal = () => setCalcCartTotal(calcCartTotal);


    return ( ""
        // <>
        //     <h4>Total:{handleCalcCartTotal()}</h4>
        //     <input onChange={handleCalcCartTotal()}/>
        //
        //  </>
    )
}