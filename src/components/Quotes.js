const QuoteBox = ({quote}) => {
    return(
        <div>
            <div className="box-quote">
                <div className="quote">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div>
                    <p>
                        {quote.cita}
                    </p>
                </div>
            </div>
            <p className="author">{quote.autor}</p>
        </div>
    )
}
export default QuoteBox;