import "./Card.css";

const Card = (props) => {

    
    return (
        <article>
            <header>
                <h2>{props.title}</h2>
            </header>
            <section>
                {props.text}
            </section>
        </article>
    );
}
export default Card;