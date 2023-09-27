import React from 'react';

type DeliveryMethodsProps = {
  shippingMethods: string[];
};

const DeliveryMethods: React.FC<DeliveryMethodsProps> = ({ shippingMethods }) => {
  return (
    <div className="delivery-methods">
      <h2 className="text-lg font-semibold">Delivery Methods</h2>
      <div className="my-4">
        <ul className="list-disc pl-4">
          {shippingMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeliveryMethods;
