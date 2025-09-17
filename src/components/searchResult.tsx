import { type Product } from '../services/FakeProductService.ts'

type SearchResultProps = {
  products: Product[]
}
export default function SearchResult(props: SearchResultProps) {
  return (
    <div className="grid gap-4">
      {props.products.length > 0 ? props.products.map((product: Product) => (
        <div className="flex gap-4 items-center  p-2 ">
          <img src={product.image} alt="" width={40} height={40} />
          <p>{product.title}</p>
        </div>
      )) : (
          <p className="text-center py-2">Aucun resultat</p>
      )}
    </div>
  )
}
