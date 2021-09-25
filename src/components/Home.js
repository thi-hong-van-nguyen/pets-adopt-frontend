import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import dummyData from '../services/dummyData';
import { fetchCats, fetchDogs } from '../actions';

function Pet(props) {
    const { name, url } = props.pet;
    return (
        <div className='card'>
            <div><img src={url} alt='pet' /></div>
            <div className='card-pet-name'>{name}</div>
        </div>
    )
}

function Home(props) {
    const { fetchCats, fetchDogs } = props;
    const { cats, dogs } = props.data;
    const { push } = useHistory();

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
                            <div style={{ color: 'white' }}>
                                {cats.length + dogs.length} more pets available on Adopt Me
                            </div>
                            <div style={{ color: 'white' }}>
                                See More
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='planning-adoption-container'>
                <div className='planning-adoption'>
                    <h2>Planning to Adopt a Pet?</h2>
                    <div className='planning-adoption-cards'>
                        <div className='planning-adoption-card planning-adoption-card-1'>
                            <h2>Checklist for New Adopters</h2>
                            <p>Help make the transition, as smooth as possible</p>
                            <div>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                        <div className='planning-adoption-card planning-adoption-card-2'>
                            <h2>Resources</h2>
                            <p>Get the latest on adoption processes, <br/>learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.</p>
                            <div>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                        <div className='planning-adoption-card planning-adoption-card-3'>
                            <h2>Pet Adoption FAQs</h2>
                            <p>Get answers to questions you haven't thought of.</p>
                            <div>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='articles-container'>
                <div className='articles'>
                    <div className='article' onClick={() => push('/')}>
                        <img className='article-img-1' src='https://www.litter-robot.com/blog/wp-content/uploads/2016/01/girl-and-cat-2-1080-510x339.jpg' alt='cat and baby' />
                        <img className='article-img-2' src='https://www.litter-robot.com/blog/wp-content/uploads/2016/01/girl-and-cat-2-1080-510x339.jpg' alt='cat and baby' />
                        <div className='article-text'>
                            <div>
                                <h3>Cat Adoption Articles</h3>
                                <p>Helpful insights of what to expect.</p>
                            </div>
                            <div>READ MORE</div>
                        </div>
                    </div>
                    <div className='article' onClick={() => push('/')}>
                        <img className='article-img-1' src='https://cdn-prod.medicalnewstoday.com/content/images/articles/292/292829/woman-and-her-dog.jpg' alt='dog and human' />
                        <img className='article-img-2' src='https://cdn-prod.medicalnewstoday.com/content/images/articles/292/292829/woman-and-her-dog.jpg' alt='dog and human' />
                        <div className='article-text'>
                            <div>
                                <h3>Dog Adoption Articles</h3>
                                <p>Learn more abour caring for your new dog.</p>
                            </div>
                            <div>READ MORE</div>
                        </div>
                    </div>
                </div>
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
