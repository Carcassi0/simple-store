import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("example");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("creditcard");
    const [shipping, setShipping] = useState("delivery");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingMethod(e){
        setShipping(e.target.value);
    }

    return(<>
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange}
        placeholder="Enter extra information"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select a payment option</option>
            <option value="creditcard">CreditCard</option>
            <option value="deposit">Bankbook Deposit</option>
            <option value="kakaopay">KakaoPay</option>
            <option value="tosspay">TossPay</option>
            <option value="samsungpay">SamsungPay</option>
            <option value="applepay">ApplePay</option>
            <option value="kbpay">KbPay</option>

        </select>
        <p>Payment: {payment}</p>
        <label>
            <input type="radio" value="pickup"
            checked={shipping === "pickup"}
                onChange={handleShippingMethod}>
            </input>
            Pick Up
        </label>
        <label>
            <input type="radio" value="delivery"
            checked={shipping === "delivery"}
                onChange={handleShippingMethod}>
            </input>
            Delivery
        </label>
        <p>Shipping Method: {shipping}</p>
    </div>
    </>);
}

export default MyComponent