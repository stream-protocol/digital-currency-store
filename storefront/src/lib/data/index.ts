// ... other imports
import { DigitalProduct, ProductCryptocurrency } from "types/product-cryptocurrency"

// ... rest of the functions

export async function getProductMediaPreviewByVariant(
  coin: Coin
): Promise<ProductCryptocurrency> {
  const { product_cryptocurrency } = await medusaRequest("GET", `/product-cryptocurrency`, {
    query: {
      coin_ids: coin.id,
      expand: ["Coins"],
    },
  })
    .then((res) => res.body)
    .catch((err) => {
      throw err
    })

  return product_cryptocurrencies[0]
}