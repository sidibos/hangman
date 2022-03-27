import './app.css';
import GameBoard from "./game-board";

export default function App() {
    return (
        <div className="app-container">
            <h1>Welcome to Hangman!</h1>
            <p>Do you want toplay a game 2?</p>

            <div>
                <GameBoard 
                    secretWord="Panda" 
                    maxErrors={6}
                />
            </div>
        </div>
    );
}