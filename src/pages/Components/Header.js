import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <p className='logo'>VANVISTA</p>
                <div className='links-wrapper'>
                    <p>Our Fleets</p>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>News</p>
                </div>

                <div className='buttons-wrapper'>
                    <button>Explore our Vans</button>
                    <button>Hire a Van</button>
                </div>
            </nav>
            <h3>VAN-VISTA</h3>
            <Image
                className='introductionImage'
                src={'/introductionCamper.jpg'}
                height={2250}
                width={2250}
                alt='camper Van'
            />
        </header>
    );
}

export default Header;
