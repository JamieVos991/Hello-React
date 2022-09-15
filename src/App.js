import Card from "./Card";
import "./App.css";

const App = () =>{

    const click = () => {
        console.log("Ik ben geklikt!");
    }

    const random = () => {
        console.log( Math.random());
    }

    const sum = () => {
        console.log( 10 + 11);
    }

    return(
        <>
            <Card mouseclick={click} title="Eerste kaartje" text="Lorem A"/>   
            <Card mouseclick={random} title="Tweede kaartje" text="Lorem B"/>           
            <Card mouseclick={sum} title="Derde kaartje" text="Lorem C"/>       
        </>     
    );
}

export default App;