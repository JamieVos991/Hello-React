import "./Card.css";

const Card3 = () => {
    const hallo = () => {
        console.log("Ik ben kaartje C");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus aliquam elit quis placerat. Sed nisi sem, fringilla at dictum ut, congue vitae orci. Proin semper metus finibus nisi pulvinar, vitae finibus orci volutpat. Sed faucibus metus sit amet augue imperdiet gravida.
            </section>
        </article>
    );
}
export default Card3;