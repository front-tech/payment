import './cart.container.css';
import React, { useEffect } from 'react';
import { ICart } from './cart.models';

export function Cart(props: ICart) {

    // Consultar Id de producto
    // Response -> ¿img? / description / 
    // 

    // useEffect(() => {
    // }, []);


        // {
        //     desc: 'Lorem impsut',
        //     title: 'Tractor Porche',
        //     price: 100,
        //     urlImage: './assets/images/reco_1.jpg'
        // },
        // {
        //     desc: 'Lorem impsut',
        //     title: 'Tractor Porche',
        //     price: 100,
        //     urlImage: './assets/images/reco_1.jpg'
        // },
        // {
        //     desc: 'Lorem impsut',
        //     title: 'Tractor Porche',
        //     price: 100,
        //     urlImage: './assets/images/reco_1.jpg'
        // }
  


    return (
        <div>
            <div>
                <img src="./assets/images/reco_1.jpg" alt="" />
                <h1> Cart </h1>
            </div>
            <div>
                <a href={`${props?.urlProduct}=${props?.productId}`} ></a>
            </div>
            <div>
                <h1> Titulo</h1>
                <h1> Imagen</h1>
                <h1> Descripcion</h1>
                <button> COMPRAR</button>
            </div>
        </div>
    );
};

