import React from 'react';

type ShippingDetailsProps = {
  walletAddress: string; // Change the prop name to walletAddress
  shippingMethods: ShippingMethod[];
  email: string;
};

const ShippingDetails = ({
  walletAddress, // Use the walletAddress prop
  shippingMethods,
  email,
}: ShippingDetailsProps) => {
  return (
    <div className="text-base-regular">
      <h2 className="text-base-semi">Delivery</h2>
      <div className="my-2">
        <h3 className="text-small-regular text-gray-700">Details</h3>
        <div className="flex flex-col">
          <span>SPL-compliant Wallet Address: {walletAddress}</span>
          <span>Email: {email}</span>
        </div>
      </div>
      <div className="my-2">
        <h3 className="text-small-regular text-gray-700">Delivery method</h3>
        <div>
          {shippingMethods.map((sm) => {
            return <div key={sm.id}>{sm.shipping_option.name}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
