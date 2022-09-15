import "./Card.css";

const Card = (props) => {
    // console.log(props);
    
    return (
        <article onClick={props.mouseclick}>
            <header>
                <h2>{props.title || "Default title"}</h2>
            </header>
            <section>
                {props.text || "Lorem Ipsum"}
            </section>
        </article>
    );
}
export default Card;