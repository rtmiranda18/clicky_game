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
    const [selected, setSelected] = useState('')
    const handleChanges = (selectedImage) => {
        if(selected != selectedImage) {
            setSelected(selectedImage) 
        }
        else {
            setImages(initImages)
        }
    }
    const shuffleImages = (images) => {
        for (let i = images.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            [images[i], images[newIndex]] = [images[newIndex], images[i]];
        }
        setImages(images)
    } 
    
    // const newImages = shuffleImages(images)
    useEffect(() => { shuffleImages(images) }, [selected])
    return (
      <div className="game">
        CLICKY GAME
        <div className="images">
        {
            images.map((image, index) => 
                <div className="image" key={index} onClick={() => handleChanges(image)}>
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
  