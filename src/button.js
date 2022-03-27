import {useState} from "react";

export default function ({value, onClick}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button';

    if (isClicked) {
        className += ' guessed';
    }

    function clickHandler() {
        setIsClicked(true);
        onClick(value);
    }

    return (
        <button 
        className={className}
        onClick={clickHandler}
        >
            {value}
            </button>
    );
}

// export default class Button extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <button className="button">{this.props.value}</button>
//         );
//     }
// }