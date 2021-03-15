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

    // const onButtonClick = (e: any) => {
    //     props.onBuyButtonCheck(false);
    // };

    useEffect(() => {


        let trackingNumberParam: string | null = new URLSearchParams(search).get('product');
        trackingNumberParam= trackingNumberParam ? trackingNumberParam : '1';

        const search = window.location.search;

        const trackingNumberParam: string | null = new URLSearchParams(search).get('product');
debugger
        if (trackingNumberParam) {
            fetch(`./${trackingNumberParam}.json`)
                .then((response: any) => response.json())
                .then(product => {
                    debugger
                    setInternalState(product);
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
                    <a className="button button1" href="/payment/success"> COMPRAR</a>
                    {/* <button className="button button1" onClick={(e) => onButtonClick(e)}> COMPRAR</button> */}
                    <div className="footer-container">
                        <p>Información del producto</p>
                        <a href={`${props?.urlProduct}=${props?.productId}`} ></a>
                        {/* <a href='/success' > link</a> */}
                    </div>
                </div>
            )
            }
        </div>
    );
};

