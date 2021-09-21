import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import dummyData from '../services/dummyData';
import Pet from './Pet';
import { fetchCats } from '../actions';

function Cats(props) {
    useEffect(() => {
        props.fetchCats(dummyData.cats)
    }, []);

    return (
        <div>
            <h1>Featured Pets</h1>
            {props.isLoading
                ? <div>Loading...</div>
                : <div className='pet-cards-container'>
                    {props.cats.map(cat => {
                        return (<Pet pet={cat} key={cat.id} />)
                    })}
                </div>
            }

        </div>
    )
};

const mapStateToProps = state => {
    return ({
        cats: state.catData.cats,
        isLoading: state.catData.isLoading
    });
}

export default connect(mapStateToProps, { fetchCats })(Cats);
