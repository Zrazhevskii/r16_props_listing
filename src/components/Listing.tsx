import React from 'react';
import { JsonData } from '../App';
import Item from './Item';

interface TItem {
    items: JsonData[];
}

function Listing({ items = [] }: TItem) {

    return (
        <div className='item-list'>
            {items.map((elem) => {
                return (
                    <Item key={elem.listing_id} item={elem}/>
                )
            })}
        </div>
        )
}

export default Listing;
