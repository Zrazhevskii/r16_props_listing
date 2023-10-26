import Listing from './components/Listing';
import './App.css';
const db = require('./data/etsy.json');

function App() {
    return <Listing items={db} />;
}

export default App;
