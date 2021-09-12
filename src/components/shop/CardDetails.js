import React, { useState } from 'react';
import './style.css'
const CardDetails = ({ card, removeFromCard }) => {
    const { title, discription, price, img } = card
    const [test, setTest] = useState(0)
    return (
        <><div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img width="100%" height="100%" src={img} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{discription}</p>
                        <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }} class="card-text">Price : $ {price}</p>
                        <select className="selectFiled">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                        <button className="btn btn-danger d-flex mt-2" onClick={() => removeFromCard(card.id)} >Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardDetails;