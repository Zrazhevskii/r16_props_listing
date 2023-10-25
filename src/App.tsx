import React from 'react';
import Listing from './components/Listing';
import './App.css';
import './data/etsy.json';
const db = require('./data/etsy.json');

export interface JsonData {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

function App() {
    return <Listing items={db} />;
}

export default App;
