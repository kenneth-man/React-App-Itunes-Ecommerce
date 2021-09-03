import React from 'react';
import sampleImg1 from '../Res/sample-img-1.jpg';
import sampleImg2 from '../Res/sample-img-2.jpg';
import sampleImg3 from '../Res/sample-img-3.jpg';
import sampleImg4 from '../Res/sample-img-4.jpg';

const Home = () => {
    return (
        <div className='home main col'>
            <div className='main__header col'>
                <h1>Itunes Ecommerce</h1>

                <h2 style={{width: '90%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
            </div>

            <div className='row' style={{padding: '100px 0px'}}>
                <div className='col'>
                    <h1>①</h1>
                    <h2>🏆 Lorem ipsum dolor sit amet</h2>
                    <h3 style={{width: '85%'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                </div>

                <div className='col'>
                    <h1>②</h1>
                    <h2>💸 Lorem ipsum dolor sit amet</h2>
                    <h3 style={{width: '85%'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                </div>

                <div className='col'>
                    <h1>③</h1>
                    <h2>🎶 Lorem ipsum dolor sit amet</h2>
                    <h3 style={{width: '85%'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                </div>
            </div>
            
            <div className='home__grid'>
                <img src={sampleImg1} alt='sample-img' className='home__img round'/>
                
                <div className='col'>
                    <h2>&ndash; Ut enim ad minima veniam &ndash;</h2>
                    <h3 style={{width: '85%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                </div>

                <div className='col'>
                    <h2>&ndash; Ut enim ad minima veniam &ndash;</h2>
                    <h3 style={{width: '85%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                </div>

                <img src={sampleImg2} alt='sample-img' className='home__img round'/>

                <img src={sampleImg3} alt='sample-img' className='home__img round'/>

                <div className='col'>
                    <h2>&ndash; Ut enim ad minima veniam &ndash;</h2>
                    <h3 style={{width: '85%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                </div>

                <div className='col'>
                    <h2>&ndash; Ut enim ad minima veniam &ndash;</h2>
                    <h3 style={{width: '85%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                </div>

                <img src={sampleImg4} alt='sample-img' className='home__img round'/>
            </div>
        </div>
    )
}

export default Home;