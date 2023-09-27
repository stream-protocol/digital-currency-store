// ... other components 

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  // map the metadata object to an array 
  const metadata = useMemo(() => {
    if (!product.metadata) return []
    return Object.keys(product.metadata).map((key) => {
      return [key, product.metadata?.[key]]
    })
  }, [product])

  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
                {/* Map the metadata as Cryptocurrency or Token information */}
          {metadata &&
            metadata.slice(0, 2).map(([key, value], i) => (
              <div key={i}>
                <span className="font-semibold">{key}</span>
                <p>{value}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-y-4">
          {metadata.length > 2 &&
            metadata.slice(2, 4).map(([key, value], i) => {
              return (
                <div key={i}>
                  <span className="font-semibold">{key}</span>
                  <p>{value}</p>
                </div>
              )
            })}
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

// ... other components 