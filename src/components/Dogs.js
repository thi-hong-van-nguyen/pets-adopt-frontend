import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import dummyData from '../services/dummyData';
import Pet from './Pet';
import { fetchDogs } from '../actions';

function Dogs(props) {
    const { fetchDogs, dogs, isLoading } = props;
    useEffect(() => {
        fetchDogs(dummyData.dogs)
    }, [fetchDogs]);
    console.log('Dogs:', dogs)

    return (
        <div>
            <h1>Featured Pets</h1>
            {isLoading
                ? <div>Loading...</div>
                : <div className='pet-cards-container'>
                    {dogs.map(dog => {
                        return (<Pet pet={dog} key={dog.id} />)
                    })}
                </div>
            }

        </div>
    )
};

const mapStateToProps = state => {
    return ({
        dogs: state.dogData.dogs,
        isLoading: state.dogData.isLoading
    });
}

export default connect(mapStateToProps, { fetchDogs })(Dogs);
