import React from 'react';
import { Button } from 'react-bootstrap';
import './Middle.css';

const Middle = () => {
    return (
        <div>
            <section className="top-section ">
                <div className='text-center justify-content-center share-card'>
                    <div className='pb-4 heading mb-2'><span style={{ color: 'rgb(0, 4, 255)' }}>Share feelings</span> without being judged</div>
                    <Button style={{ backgroundColor: '#6308DA' }}>Share feelings</Button>
                </div>
                <div className='topLink'>
                    <a href="/join">Join</a>
                    <a href="/share">Share</a>
                    <a href="/feelRelief">Feel Relief</a>
                </div>
                {/* <div className="col-sm-4 col-md-6 align-items-center d-flex">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                </div> */}
            </section>
            <section className='positivity mt-5 pb-5'>
                <h2 className=" mb-5" style={{ textAlign: 'center' }}>A Community to spread positivity</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card align-items-center d-flex pt-5 pb-5" style={{ backgroundColor: 'lightgray' }}>
                            <div className="card-body positivity-card ">
                                <div className="card ">
                                    <div className="card-body ">
                                        <h5 className="card-title text-nowrap" style={{ width: '8rem' }} >Current feeling</h5>
                                        <p className="card-text">So excited to finally get my hands on the latest PS5.</p>
                                        <p className="card-text" style={{ fontWeight: 'bold' }}>@Josh</p>
                                        <p className="card-text"><small className="text-muted">a few seconds ago</small></p>
                                    </div>
                                </div>
                                <div className="card mt-5 mb-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Current feeling</h5>
                                        <p className="card-text">So excited to finally get my hands on the latest PS5.</p>
                                        <p className="card-text" style={{ fontWeight: 'bold' }}>@Josh</p>
                                        <p className="card-text"><small className="text-muted">a few seconds ago</small></p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p>Share whats on your mind with the community</p>
                                    <Button style={{ backgroundColor: '#6308DA' }}>Share feelings</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card align-items-center d-flex pt-5 pb-5" style={{ backgroundColor: 'lightgray' }}>
                            <div className="card-body positivity-card ">
                                <div className="card">
                                    <div className="card-body ">
                                        <h5 className="card-title" >Watching</h5>
                                        <p className="card-text">The wolf of Wall street. A must watch.</p>
                                        <p className="card-text" style={{ fontWeight: 'bold' }}>@lilly</p>
                                        <p className="card-text"><small className="text-muted">a few seconds ago</small></p>
                                    </div>
                                </div>
                                <div className="card mt-5 mb-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Watching</h5>
                                        <p className="card-text">The wolf of Wall street. A must watch.</p>
                                        <p className="card-text" style={{ fontWeight: 'bold' }}>@lilly</p>
                                        <p className="card-text"><small className="text-muted">a few seconds ago</small></p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p>Share whats on your mind with the community</p>
                                    <Button style={{ backgroundColor: '#6308DA' }}>Share feelings</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Middle;