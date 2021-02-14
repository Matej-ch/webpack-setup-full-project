import "../styles/style.scss";
import Spells from "./Spells";
import wand from "../images/wand.jpg"

const App = () => {
    return (
        <>
            <section className="hero">

            </section>
            <main>
                <section>
                    <h1>Oh hello there</h1>
                </section>
            </main>
            <img src={wand} alt="wand" width="250px"/>
            <Spells />

        </>
    )
}

export default App;