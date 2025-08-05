import './App.css'
import Stars from "./components/Stars.jsx";

function App() {
    return (
        <div style={{ padding: '50px', background: 'white' }}>
            <h1>Stars Component Test</h1>

            <p>Rating: 4.9</p>
            <Stars rating={4.9} />

            <p>Rating: 3.5</p>
            <Stars rating={3.5} />

            <p>Rating: 5</p>
            <Stars rating={5} />

            <p>Rating: 0.2</p>
            <Stars rating={0.2} />
        </div>
    )
}

export default App
