import { useState } from 'react';
import './app.css';
import GameBoard from "./game-board";
import WordSelect from './word-select';

export default function App() {
    const [secretWord, setSecretWord] = useState('');

    return (
        <div className="app-container">
            <h1>Welcome to Hangman!</h1>
            <p>Do you want toplay a game 2?</p>

            <div>
                <WordSelect 
                    isShown={!secretWord}
                    wordSelected={val => setSecretWord(val)}
                />
                <GameBoard 
                    secretWord={secretWord}
                    isShown={secretWord} 
                    maxErrors={6}
                />
            </div>
        </div>
    );
}