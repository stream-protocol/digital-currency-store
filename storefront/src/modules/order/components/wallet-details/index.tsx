import React from 'react';

type WalletDetailsProps = {
  walletAddress: string;
  balance: number;
  currency: string;
};

const WalletDetails: React.FC<WalletDetailsProps> = ({
  walletAddress,
  balance,
  currency,
}) => {
  return (
    <div className="wallet-details">
      <h2 className="text-lg font-semibold">Wallet Details</h2>
      <div className="my-4">
        <p>
          <strong>Wallet Address:</strong> {walletAddress}
        </p>
        <p>
          <strong>Balance:</strong> {balance} {currency}
        </p>
        {/* You can add more wallet-related information here */}
      </div>
    </div>
  );
};

export default WalletDetails;
