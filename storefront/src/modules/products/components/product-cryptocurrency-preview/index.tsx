// src/modules/products/components/product-media-preview/index.tsx

import Button from "@modules/common/components/button"
import { ProductCryptocurrency } from "types/product-cryptocurrency"

type Props = {
  cryptocurrency: ProductCryptocurrency
}

const ProductCryptocurrencyPreview: React.FC<Props> = ({ media }) => {
  const downloadPreview = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/preview?filepath=${cryptocurrency.file}&filename=${cryptocurrency.name}`
  }

  return (
    <div>
      <Button variant="secondary" onClick={downloadPreview}>
        Download free preview
      </Button>
    </div>
  )
}

export default ProductCryptocurrencyPreview
