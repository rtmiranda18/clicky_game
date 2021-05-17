import { useState } from 'react';
import './styles/game.scss';

const Game = () => {
    const initImages = [
        {
            id: 0, name: 'cake.jpg'
        },
        {
            id: 1, name: 'cookies.jpg'
        },
        {
            id: 2, name: 'dumplings.jpg'
        },
        {
            id: 3, name: 'fries.jpg'
        },
        {
            id: 4, name: 'indianfood.jpg'
        },
        {
            id: 5, name: 'kebab.jpg'
        },
        {
            id: 6, name: 'lobsterrolls.jpg'
        },
        {
            id: 7, name: 'pasta.jpg'
        },
        {
            id: 8, name: 'pizza.png'
        },
        {
            id: 9, name: 'ramen.jpg'
        },
        {
            id: 10, name: 'sushi.jpg'
        },
        {
            id: 11, name: 'tteokbokki.jpg'
        }
    ];
    const [images, setImages] = useState(initImages)
    return (
      <div className="game">
        This is my game!
        <div className="images">
        {
            images.map(image => 
                <div className="image" key={image.id}>
                    <div className="img">
                        <img src={'./images/' + image.name} alt="food" />
                    </div>
                </div>
            )
        }
        </div>
      </div>
    );
  }
  
  export default Game;
  