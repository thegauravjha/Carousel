import './App.css'
import CarouselContainer from './Components/CarouselContainer'
import { API_2 } from './utils/constant';
import useFetch from './customHooks/useFetch';

function App() {
    const { data, loading, error } = useFetch(API_2);
    if (error) {
        return <>
            <h1>Error: {error}</h1>
        </>
    }

    return (
        <>
            <h2>Quiz Questions</h2>
            {
                loading
                    ? <p>Loading...</p>
                    : <CarouselContainer data={data?.data} />
            }
        </>
    )
}

export default App;
