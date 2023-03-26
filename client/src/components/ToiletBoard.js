import React, { Component } from 'react';
import ToiletCard from './ToiletCard';
import './ToiletBoard.css';

export default class ToiletBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toilets: [],
        };
    }

    componentDidMount() {
        this.callBackEnd().then((res) =>
            this.setState({
                toilets: [...res.toilets],
            }).catch((err) => console.log(err))
        );
    }

    callBackEnd = async () => {
        const response = await fetch('http://localhost:4000/show');
        const body = await response.json();

        return body;
    };

    render() {
        let toilets = this.state.toilets.map((toilet) => (
            <ToiletCard
                key={toilet._id}
                img={toilet.image}
                name={toilet.name}
                code={toilet.code}
            ></ToiletCard>
        ));
        return (
            <div className='ToiletBoard'>
                <h4>ALL THE TOILETS</h4>
                <div className='ToiletDisplay'>{toilets}</div>
            </div>
        );
    }
}
