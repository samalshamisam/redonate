import React from 'react'
import { Container, Row, Card } from 'react-bootstrap';
import photo1 from '../image/photo-10.jpg';
import photo2 from '../image/photo-11.jpg';
import photo3 from '../image/photo-12.jpg';
import photo4 from '../image/photo-13.jpg';
import photo5 from '../image/photo-9-2.jpg';
import './css/audioatistsection.css'
const Audioartistsection = ()=> {
  return (
    <>
    <section className='audio'>
        <Container>
            <Row>
                <div className='sa'>
                <Card>
                <div className='audio-sound'>
                    <div className='text'><p>Sound Mixing</p></div>
                    <div className='overlay'>
                        <p>mellow melodies and heartfelt lyrics, capturing the essence</p>
                    </div>
                    <div className='sound-img'>
                        <img src={photo1} />
                    </div>
                </div>
                </Card>
                <Card>
                <div className='audio-sound'>
                    <div className='text'><p>Sound Mixing</p></div>
                    <div className='overlay'>
                    <p>mellow melodies and heartfelt lyrics, capturing the essence</p>
                    </div>
                    <div className='sound-img'>
                        <img src={photo2} />
                    </div>
                </div>
                </Card>
                <Card>
                <div className='audio-sound'>
                    <div className='text'><p>Sound Mixing</p></div>
                    <div className='overlay'>
                    <p>mellow melodies and heartfelt lyrics, capturing the essence</p>
                    </div>
                    <div className='sound-img'>
                        <img src={photo3} />
                    </div>
                </div>
                </Card>
                <Card>
                <div className='audio-sound '>
                    <div className='text'><p>Sound Mixing</p></div>
                    <div className='overlay'>
                    <p>mellow melodies and heartfelt lyrics, capturing the essence</p>
                    </div>
                    <div className='sound-img'>
                        <img src={photo4} />  
                    </div>
                </div>
                </Card>
                <Card >
                <div className='audio-sound'>
                    <div className='text'><p>Sound Mixing</p></div>
                    <div className='overlay'>
                    <p>mellow melodies and heartfelt lyrics, capturing the essence</p>
                    </div>
                    <div className='sound-img'>
                        <img src={photo5} />
                    </div>
                </div>
                </Card>
                </div>
                
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Audioartistsection;