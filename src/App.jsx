import './App.css'
import RatingWidget from "./components/RatingWidget.jsx";

function App() {
    const reviewData = {
        averageRating: 4.9,
        totalReviews: 1212,
        distribution: [
            { stars: 5, count: 952 },
            { stars: 4, count: 171 },
            { stars: 3, count: 55 },
            { stars: 2, count: 14 },
            { stars: 1, count: 20 },
        ]
    };

    return (
        <>
            <RatingWidget reviewData={reviewData} />
        </>
    )
}

export default App