import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce.tsx'
import {
  FakeProductService,
  type Product,
} from '../services/FakeProductService.ts'
import SearchInput from './searchInput.tsx'
import SearchResult from './searchResult.tsx'

export default function SearchWithDebounce() {
  // Service
  const service = new FakeProductService()

  // States
  const [search, setSearch] = useState<string>('')
  const [numberRequest, setNumberRequest] = useState<number>(-1)
  const [data, setData] = useState<Product[]>()

  // useDebounce
  const searchDebounce = useDebounce<string>(search, 600)

  // useEffect
  useEffect(() => {
    if (searchDebounce !== '') {
      async function fetchData() {
        const result = await service.getSearchAutocompletion(searchDebounce)
        setData(result)
      }
      setNumberRequest(numberRequest + 1)

      fetchData()
    } else {
      async function fetchAllData() {
        const result = await service.getAllProducts()
        setData(result)
      }
      setNumberRequest(numberRequest + 1)
      fetchAllData()
    }
  }, [searchDebounce])

  return (
    <div className="bg-blue-50/40 p-4 rounded-lg mb-8 h-full">
      <header className="mb-4">
        <h2 className="text-center font-medium text-xl ">
          Recherche avec le Hook useDebounce
        </h2>
        <p className="text-center text-gray-500">
          Nombre de requête au serveur : {numberRequest}
        </p>
      </header>

      <div>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {data && <SearchResult products={data} />}
      </div>
    </div>
  )
}
