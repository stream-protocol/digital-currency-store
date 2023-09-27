// src/modules/products/components/product-actions/index.tsx

// ...other imports
import ProductCryptocurrencyPreview from "../product-cryptocurrency-preview"
import { getProductCryptocurrencyPreviewByCurrency } from "@lib/data"

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
    // ...other code

  const [productCryptocurrency, setProductCryptocurrency] = useState({} as ProductCryptocurrency)

  useEffect(() => {
    const getProductCryptocurrency = async () => {
      if (!currency) return
      await getProducCryptocurrencyPreviewByCurrency(currency).then((res) => {
        setProductCryptocurrency(res)
      })
    }
    getProductCryptocurrency()
  }, [currency])

  return (
            // ...other code

      {productCryptocurrency && <ProductCryptocurrencyPreview cryptocurrency={productCryptocurrency} />}

      <Button onClick={addToCart}>
        {!inStock ? "Out of stock" : "Add to cart"}
      </Button>
    </div>
  )
}

export default ProductActions