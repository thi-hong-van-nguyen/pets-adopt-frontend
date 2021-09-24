import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import dummyData from '../services/dummyData';
import { fetchCats, fetchDogs } from '../actions';

function Pet(props) {
    const { name, url} = props.pet;
    return (
        <div className='card'>
            <div><img src={url} alt='pet' /></div>
            <div>{name}</div>
        </div>
    )
}

function Home(props) {
    const { fetchCats, fetchDogs } = props;
    const { cats, dogs } = props.data;

    useEffect(() => {
        fetchDogs(dummyData.dogs);
        fetchCats(dummyData.cats);
    }, [fetchDogs, fetchCats]);


    return (
        <div id='main'>
            <div className='get-started-container'>
                <div id='overlay'></div>
                <div className='get-started'>
                    <div id='get-started-text'>
                        <h1>Get Personalized Pet Matches</h1>
                        <div>Take a quick Quiz to find your perfect matched pet on AdoptMe</div>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>
            <div className='pet-care-container'>
                <div className='pet-care'>
                    <a id='pet-care-1' href='#top'>
                        About pet adoption
                    </a>
                    <a id='pet-care-2' href='#top'>
                        <i className='fas fa-dog'></i>
                        Dog care
                    </a>
                    <a id='pet-care-3' href='#top'>
                        <i className='fas fa-cat'></i>
                        Cat care
                    </a>
                    <a id='pet-care-4' href='#top'>
                        <i className='fas fa-paw'></i>
                        All pet care
                    </a>
                </div>
            </div>
            <div className='pet-images-container'>
                <div id='pets-list'>
                    <div>
                        <h1>Meet Our Available Pets</h1>
                    </div>
                    <div id='pet-cards-container'>
                        {cats.filter((cat, index) => index < 2).map(item => (<Pet key={item.id} pet={item} />))}
                        {dogs.filter((dog, index) => index < 2).map(item => (<Pet key={item.id} pet={item} />))}
                        <div className='card card-5'>
                            <div style={{color: 'white'}}>
                                {cats.length + dogs.length} more pets available on Adopt Me
                            </div>
                            <div style={{color: 'white'}}>
                                See More
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='learn-more'>

            </div>
            <div className='articles-container'>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        data: {
            cats: state.catData.cats,
            dogs: state.dogData.dogs
        }
    })
}

export default connect(mapStateToProps, { fetchDogs, fetchCats })(Home);
