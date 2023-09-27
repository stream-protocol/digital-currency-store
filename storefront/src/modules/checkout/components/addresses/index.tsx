import { useCheckout } from "@lib/context/checkout-context"
import Button from "@modules/common/components/button"
import Spinner from "@modules/common/icons/spinner"
import WalletAddress from "../wallet-address"

const WalletAddresses = () => {
  const {
    editWalletAddresses: { state: isEdit, toggle: setEdit },
    setWalletAddresses,
    handleSubmit,
    cart,
  } = useCheckout()
  return (
    <div className="bg-white">
      <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
          1
        </div>
        <h2>Wallet address</h2>
      </div>
      {isEdit ? (
        <div className="px-8 pb-8">
          <ShippingAddress />
          <Button
            className="max-w-[200px] mt-6"
            onClick={handleSubmit(setWalletAddresses)}
          >
            Continue to purchase
          </Button>
        </div>
      ) : (
        <div>
          <div className="bg-gray-50 px-8 py-6 text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="bg-blue-900 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                  ✓
                </div>
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <span>
                      {cart.your_solana_wallet_address}{" "}
                      {cart.your_usdc_wallet_address}
                      {cart.your_eurc_wallet_address}
                      {cart.your_srtm_wallet_address}
                      {cart.your_bonus_wallet_address}
                    </span>
                    <div className="mt-4 flex flex-col">
                      <span>{cart.email}</span>
                    </div>
                  </div>
                  <div>
                    <button onClick={setEdit}>Edit</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default WalletAddresses