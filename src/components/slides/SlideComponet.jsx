import React from 'react'
import IMAGES from '../../assets/index.js'
import './slideComponent.css'
import { TfiCommentAlt } from "react-icons/tfi";
import { BsBox2 } from "react-icons/bs"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function SlideComponet() {
    return (
        <div className='dark-blue-slide-container'>
            <h1>Project in Progress</h1>
            <Carousel className='carousel'>
                <div className='white-card-container'>
                    <div className='top-options'>
                        <h2 className='txt-one'>Feedbacks</h2>
                        <h2 className='txt-two'>Blog</h2>
                        <h2 className='txt-three'>Design System</h2>
                    </div>
                    <div className='card-text-number'>
                        <h3>improve card readablity</h3>
                        <h5>21 00 22</h5>
                    </div>
                    <div className='zedindex-images-icons-container'>
                        <div className='hold-images'>
                            <div className='first-image'><img className='image' src={IMAGES.imgFour} alt="" /></div>
                            <div className='second-image'><img className='image' src={IMAGES.imgTwo} alt="" /></div>
                            <div className='third-image'>+9</div>
                        </div>
                        <div className='card-icons'>
                            <div className='tweleve-comments'>
                                <TfiCommentAlt className='tf-icon' />
                                <span>12 comments</span>
                            </div>
                            <div className='zerofiles'>
                                <BsBox2 className='bs-icon' />
                                <span>0 files</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='white-card-container'>
                    <div className='top-options'>
                        <h2 className='txt-one'>Feedbacks</h2>
                        <h2 className='txt-two'>Blog</h2>
                        <h2 className='txt-three'>Design System</h2>
                    </div>
                    <div className='card-text-number'>
                        <h3>improve card readablity</h3>
                        <h5>21 00 22</h5>
                    </div>
                    <div className='zedindex-images-icons-container'>
                        <div className='hold-images'>
                            <div className='first-image'><img className='image' src={IMAGES.imgFour} alt="" /></div>
                            <div className='second-image'><img className='image' src={IMAGES.imgTwo} alt="" /></div>
                            <div className='third-image'>+9</div>
                        </div>
                        <div className='card-icons'>
                            <div className='tweleve-comments'>
                                <TfiCommentAlt className='tf-icon' />
                                <span>12 comments</span>
                            </div>
                            <div className='zerofiles'>
                                <BsBox2 className='bs-icon' />
                                <span>0 files</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='white-card-container'>
                    <div className='top-options'>
                        <h2 className='txt-one'>Feedbacks</h2>
                        <h2 className='txt-two'>Blog</h2>
                        <h2 className='txt-three'>Design System</h2>
                    </div>
                    <div className='card-text-number'>
                        <h3>improve card readablity</h3>
                        <h5>21 00 22</h5>
                    </div>
                    <div className='zedindex-images-icons-container'>
                        <div className='hold-images'>
                            <div className='first-image'><img className='image' src={IMAGES.imgFour} alt="" /></div>
                            <div className='second-image'><img className='image' src={IMAGES.imgTwo} alt="" /></div>
                            <div className='third-image'>+9</div>
                        </div>
                        <div className='card-icons'>
                            <div className='tweleve-comments'>
                                <TfiCommentAlt className='tf-icon' />
                                <span>12 comments</span>
                            </div>
                            <div className='zerofiles'>
                                <BsBox2 className='bs-icon' />
                                <span>0 files</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default SlideComponet