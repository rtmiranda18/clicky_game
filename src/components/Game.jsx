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
    const [score, setScore] = useState(0)
    const handleChanges = (selectedImage) => {
        if(selected !== selectedImage) {
            setSelected(selectedImage)
            setScore(score + 1) 
        }
        else {
            setImages(initImages)
            setScore(0)
        }
    }
    const shuffleImages = (images) => {
        for (let i = images.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            [images[i], images[newIndex]] = [images[newIndex], images[i]];
        }
        setImages(images)
    } 
    
    useEffect(() => { shuffleImages(images) }, [selected])
    return (
      <div className="game">
        <h1>CLICKY GAME</h1> 
        <p>Score: {score}</p>
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
  