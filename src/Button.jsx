const Button = ({changeQuote,colors,randomColorIndex}) => {
    return (
        <div  >
            <button onClick={changeQuote} style={{ backgroundColor: colors[randomColorIndex] }}><i class="fa-solid fa-chevron-right"></i></button> 
        </div>
    );
};

export default Button;