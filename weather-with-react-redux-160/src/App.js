import "./style/style.css";
import SearchForm from "./components/SearchForm";
import Information from "./components/Information";
import {useSelector} from "react-redux";


function App() {

    const city = useSelector(state => state.currentCity.cityName)

    return (
        <div className="main">
            <SearchForm value={city} />
            <Information/>
        </div>
    );
}

export default App;
