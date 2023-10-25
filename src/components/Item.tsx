import React from 'react';
import { JsonData } from '../App';

interface JsonItem {
    item: JsonData;
}

function Item({
    item: { url, MainImage, title, currency_code, price, quantity },
}: JsonItem) {
    if (title === undefined) {
        return null;
    }

    let pricetag: string;
    let color: string;

    if (currency_code === 'USD') {
        pricetag = `$${price}`;
    } else if (currency_code === 'EUR') {
        pricetag = `€${price}`;
    } else {
        pricetag = `${price} ${currency_code}`;
    }

    if (quantity <= 10) {
        color = 'level-low';
    } else if (quantity <= 20) {
        color = 'level-medium';
    } else {
        color = 'level-high';
    }

    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={MainImage?.url_570xN} />
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>
                    {title.length <= 50
                        ? title
                        : (title = title.slice(0, 50) + '...')}
                </p>
                <p className='item-price'>{pricetag}</p>
                <p className={`item-quantity ${color}`}>{quantity}left</p>
            </div>
        </div>
    );
}

export default Item;
