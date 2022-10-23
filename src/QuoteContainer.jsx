const QuoteContainer = ({quote, author}) => {
    return (
      <div className="card" >
        <p><i className="fa-solid fa-quote-left"></i>{quote}</p>
          <h3>{author}</h3>
      </div>
    );
};

export default QuoteContainer;