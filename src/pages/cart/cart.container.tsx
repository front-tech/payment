import './cart.container.css';
import React, { useEffect, useState } from 'react';
import { ICart } from './cart.models';

type Product = {
    title: string,
    urlImage: string,
    desc: string,
    price: number
}
export function Cart(props: ICart) {

    const [internalState, setInternalState] = useState<Product | null>(null)

    const onButtonClick = (e: any) => {
        props.onBuyButtonCheck(false);
    };

    useEffect(() => {

        const search = window.location.search;

        window.history.replaceState({}, '', `${window.location.pathname}?product=${1}`);

        const trackingNumberParam: string | null = new URLSearchParams(search).get('product');

        if (trackingNumberParam) {
            fetch(`${trackingNumberParam}.json`)
                .then((response: any) => response.json())
                .then(product => {
                    setInternalState(product)
                });
        }

    }, []);

    return (
        <div>
            { internalState && (
                <div>
                    <div className="header-container">
                        <figure>
                            <img className="img" src="./carrito.png" alt="" />
                        </figure>
                        <h1> Cart </h1>
                    </div>
                    <div className="body-container">
                        <h1> {internalState.title}</h1>
                        <h2> {internalState.price}$</h2>
                        <h3> {internalState.desc} </h3>
                        <img src={internalState.urlImage} alt="" />
                    </div>
                    <button className="button button1" onClick={(e) => onButtonClick(e)}> COMPRAR</button>
                    <div className="footer-container">
                        <p>Información del producto</p>
                        <a href={`${props?.urlProduct}=${props?.productId}`} ></a>
                    </div>
                </div>
            )
            }
        </div>
    );
};

