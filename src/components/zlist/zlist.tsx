import React from "react";

type ZListProps = {
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
};

function ZList({ item }: { item: ZListProps }) {
  return (
    <div className="flex w-full justify-between items-center px-2 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <button className="btn w-10 h-10">
          <p>{item.quantity}x</p>
        </button>
        <p>{item.name}</p>
      </div>
      <p>Rp. {item.price.toLocaleString("id-ID")}</p>
    </div>
  );
}

export default ZList;
