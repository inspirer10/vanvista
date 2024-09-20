import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

function PopularVans() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['/camper2.jpg', '/camper4.jpg', '/camper6.jpg'];
    const images2 = ['/camper1.jpg', '/camper3.jpg', '/camper5.jpg'];

    //! change to next image after 3 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className='popular_vans-section'>
            <article>
                <p className='introduction-paragraph'>
                    We provide quality Premium Vans for all your trips and
                    vacations.
                </p>

                <aside>
                    <p>
                        We believe that every journey should be a masterpiece,
                        and our fleet of premium camper vans is here to make
                        that vision a reality.
                    </p>

                    <button>
                        Hire a Camper Van
                        <GoArrowRight className='icon' />
                    </button>
                </aside>
            </article>

            <main>
                <h6>Popular Van Retails</h6>

                <div className='suggested-vans-container'>
                    <div className='image-container'>
                        <Image
                            className='image'
                            src={images[currentImageIndex]}
                            height={1500}
                            width={1500}
                            alt='Van'
                        />
                    </div>

                    <div className='text_content-container'>
                        <div className='content-wrapper'>
                            <div>
                                <h3>Wonder G40 Camper</h3>
                                <p className='description'>
                                    Equipped with a comfortable sleeping area
                                    compact kitchenette, and sample storage
                                    space, it offers the perfect blend of
                                    functionality and comfort.
                                </p>
                            </div>

                            <div className='bottom-bar'>
                                <button>
                                    Hire this Van
                                    <GoArrowRight className='icon' />
                                </button>

                                <p className='rent-price'>
                                    $3,399<span>/month</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='text_content-container'>
                        <div className='content-wrapper'>
                            <div>
                                <h3>Toyota HiAce</h3>
                                <p className='description'>
                                    With its durable design and fuel-efficient
                                    engine, the HiAce Camper is ready to take
                                    you on your next journey, whether you're
                                    exploring cityscapes.
                                </p>
                            </div>

                            <div className='bottom-bar'>
                                <button>
                                    Hire this Van
                                    <GoArrowRight className='icon' />
                                </button>

                                <p className='rent-price'>
                                    $2,999<span>/month</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='image-container'>
                        <Image
                            className='image'
                            src={images2[currentImageIndex]}
                            height={1500}
                            width={1500}
                            alt='Van'
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default PopularVans;
