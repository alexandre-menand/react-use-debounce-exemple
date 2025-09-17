export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export class FakeProductService {
  private urlApi: string = 'https://fakestoreapi.com/products'

  /**
   * Fetch toutes les data de l'API
   */
  async getAllProducts(): Promise<Product[]> {
    const resp: Response = await fetch(this.urlApi)
    const data: Product[] = await resp.json()
    return data
  }

  /**
   * Envoi les data en fonction de la recherche
   * @param searchText
   */
  async getSearchAutocompletion(searchText: string): Promise<Product[]> {
    if (searchText.length < 1) {
      return []
    }

    const resp: Response = await fetch(this.urlApi)
    const data: Product[] = await resp.json()

    const searchData: Product[] = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    )

    return searchData.slice(0, 5)
  }
}
