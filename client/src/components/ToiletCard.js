import React from 'react';
import { Link } from 'react-router-dom';
import './ToiletCard.css';

export default function ToiletCard({ img, name, code }) {
    return (
        <div className='ToiletCard'>
            <h4 className='ToiletCard__title'>{name}</h4>
            <img src={img} alt={name} />
            <Link className='ToiletCard__button' to={`/show/${code}`}>
                View Toilet
            </Link>
        </div>
    );
}
