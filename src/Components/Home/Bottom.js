import React from 'react';
import { Button } from 'react-bootstrap';
import emoji from './../../images/emoji.png'

const Bottom = () => {
    return (
        <div>
            <section className="top-section d-flex mb-5">
                <div className="row">
                    <div className="col-7 ml-5">
                    <div className=' p-3 ml-3' style={{ backgroundColor: 'white' }}>
                            <div className='pb-4 mb-2'>
                                <h2>Why Lets Gtok?</h2>
                                <p>Lets Gtok aims to provide a safe space online for people to share and connect with genuine feelings. Users can share their feelings or activities even without revealing their identity.</p>
                            </div>
                            <Button style={{ backgroundColor: '#6308DA' }}>Learn More</Button>
                        </div>
                    </div>
                    <div className="col-4">
                            <img src={emoji} alt="" className='rounded' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bottom;