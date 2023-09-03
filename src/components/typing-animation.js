import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = (props) => {
    return (
        <TypeAnimation
            sequence={props.sequence}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    )
}
export default TypingAnimation;