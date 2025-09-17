import SearchWithDebounce from './components/searchWithDebounce.tsx'
import SearchWithoutDebounce from './components/searchWithoutDebounce.tsx'
import Wrapper from './components/wrapper.tsx'

function App() {
  return (
    <Wrapper>
      <div>
        <h1 className="text-center font-bold text-2xl py-8"><span className="not-sr-only">✨</span> Exemple de l'utilisation du Hook useDebounce <span className="not-sr-only">✨</span></h1>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <SearchWithoutDebounce />
        <SearchWithDebounce />
      </div>
    </Wrapper>
  )
}

export default App
