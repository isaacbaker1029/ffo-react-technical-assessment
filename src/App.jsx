import './App.css'
import Stars from "./components/Stars.jsx";
import RatingSentiment from "./components/RatingSentiment.jsx";
import RatingDistribution from "./components/RatingDistribution.jsx";

function App() {
    return (
        <div style={{ padding: '50px', background: 'white' }}>
            <h1>Stars Component Test</h1>


            <p>Rating: 4.9</p>
            <RatingSentiment rating={4.9}/>
            <Stars rating={4.9} />
            <RatingDistribution distribution={[
                { stars: 5, count: 952 },
                { stars: 4, count: 171 },
                { stars: 3, count: 55 },
                { stars: 2, count: 14 },
                { stars: 1, count: 20 }, // Changed from 40 to match the sum better
            ]}
                                totalReviews={1214}/>

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
