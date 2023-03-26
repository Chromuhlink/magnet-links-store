import React from "react";

const GoerliRatsProduct = ({ onBuyClick }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <img src="https://gateway.pinata.cloud/ipfs/QmSo3BLUCJyLmRBKat5cfthug4H6oiTTQdZi47aK7pdixP" alt="Goerli Rats FC Jersey" className="w-full h-64 object-cover" />
            <h2 className="font-bold text-xl mt-4">Goerli Rats FC Jersey</h2>
            <p className="text-gray-700">The most sought after jersey since testnet</p>
            <p className="font-bold text-lg mt-2">$75</p>
            <button onClick={onBuyClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4"> Purchase</button>
        </div>
    );
};

export default GoerliRatsProduct;
