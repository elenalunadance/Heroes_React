import { useState, useEffect } from 'react';
import data from '../Services/data.json';
import Card from './Card';
import '../styles/cardList.css'


function CardList () {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className='cardList'>
            {items.map(item => (
        <Card key={item.id} name={item.name} universe={item.universe} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} url={item.url}/>
    ))}
        </div>
    )
}

export default CardList