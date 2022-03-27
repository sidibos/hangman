import Letter from './letter';

export default function(props) {
    let letters = props.secretWord
                    .split('')
                    .map((letter, index) => {
                        let isShown = props.guessedLetters.indexOf(letter.toLowerCase()) > -1;
                        return (
                            <Letter 
                            value={letter} 
                            isShown={isShown} 
                            key={index}
                            />
                        )
                    });
    return (
        <div className="flex">
            {letters}
        </div>
    );
}