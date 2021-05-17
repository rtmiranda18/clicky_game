import { useState, useEffect } from 'react';
import './styles/game.scss';

const Game = () => {
    const initImages = [
        'cake.jpg', 
        'cookies.jpg', 
        'dumplings.jpg', 
        'fries.jpg', 
        'indianfood.jpg',
        'kebab.jpg',
        'lobsterrolls.jpg',
        'pasta.jpg',
        'pizza.png',
        'ramen.jpg',
        'sushi.jpg',
        'tteokbokki.jpg'
    ];
    const [images, setImages] = useState(initImages)
    const shuffleImages = (images) => {
        for (let i = images.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            [images[i], images[newIndex]] = [images[newIndex], images[i]];
        }
        console.log(images);
        setImages(images)
    } 
    
    // const newImages = shuffleImages(images)
    useEffect(() => { setImages(images) }, [images])
    return (
      <div className="game">
        This is my game!
        <div className="images">
        {
            images.map((image, index) => 
                <div className="image" key={index} onClick={() => shuffleImages(images)}>
                    <div className="img">
                        <img src={'./images/' + image} alt="food" />
                    </div>
                </div>
            )
        }
        </div>
      </div>
    );
  }
  
  export default Game;
  