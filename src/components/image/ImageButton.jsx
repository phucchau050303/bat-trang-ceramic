import  '../../styles/imageButton.css';

const ImageButton = ({ buttonName, backgroundImageLink }) => {
    const bgStyle = backgroundImageLink
        ? { backgroundImage: `url(${backgroundImageLink})`, backgroundSize: 'cover' }
        : { background: 'transparent' };
    return (
        <button href= "#" class = "image-button" style = {{ padding: 0, border: 'none', ...bgStyle }}>
            {buttonName}
        </button>
    );
}

export default ImageButton;