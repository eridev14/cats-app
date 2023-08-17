import './App.scss'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';


//const CAT_ENDPOINT_IMG_URL = 'https://cataas.com/cat/cute/says/hello?json=true';

function App() {

  const { fact, refreshRandomFact } = useCatFact();
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact();
  }

  return (
    <main className='card'>
      <h1>Gatitos</h1>
      <button className='card__btn' onClick={handleClick}>Obten tu gatito gratis</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img className='card__img' src={imageURL} alt='image extracted' />}
    </main>
  )
}

export default App
