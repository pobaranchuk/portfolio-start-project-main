import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contacts/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopButton} from "./components/goTopButton/GoTopButton";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopButton/>
        </div>
    );
}

export default App;