import React from 'react';
import Middle from './Middle';
import Bottom from './Bottom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <Middle/>
            <Bottom/>
            <Footer/>
        </div>
    );
};

export default Home;