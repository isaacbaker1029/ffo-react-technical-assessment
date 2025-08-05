import './App.css'
import Stars from "./components/Stars.jsx";
import RatingSentiment from "./components/RatingSentiment.jsx";

function App() {
    return (
        <div style={{ padding: '50px', background: 'white' }}>
            <h1>Stars Component Test</h1>


            <p>Rating: 4.9</p>
            <RatingSentiment rating={4.9}/>
            <Stars rating={4.9} />

            <p>Rating: 3.5</p>
            <RatingSentiment rating={3.5}/>
            <Stars rating={3.5} />

            <p>Rating: 5</p>
            <RatingSentiment rating={5}/>
            <Stars rating={5} />

            <p>Rating: 0.2</p>
            <RatingSentiment rating={0.2}/>
            <Stars rating={0.2} />
        </div>
    )
}

export default App
