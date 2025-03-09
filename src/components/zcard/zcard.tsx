import Image from "next/image";
import React from "react";

type ZCardProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

function ZCard({ item, onClick }: { item: ZCardProps, onClick: () => void }) {
  const bandageColor =
    item.category === "Coffee"
      ? "bg-amber-700 "
      : item.category === "Tea"
      ? "bg-green-700"
      : item.category === "Juice"
      ? "bg-red-700"
      : item.category === "Soda"
      ? "bg-blue-700"
      : item.category === "Food"
      ? "bg-yellow-700"
      : item.category === "Snack"
      ? "bg-indigo-700"
      : item.category === "Dessert"
      ? "bg-pink-700"
      : "bg-gray-700";

  return (
    <button
    onClick={onClick}
    className="relative w-full h-64 md:h-56 cursor-pointer bg-white rounded-md overflow-hidden p-4 flex flex-col justify-start items-start gap-1 group">
      <span className="absolute bottom-0 left-0 w-full h-0 bg-zprimary rounded-md transition-all duration-500 ease-in-out group-active:h-[102vh] z-10"></span>
      <div className="relative w-full h-full rounded-lg overflow-hidden place-items-center place-content-center">
        <Image
          src={
            item.image
              ? item.image
              : "https://i.pinimg.com/736x/0e/63/9a/0e639a2520663ebda3d28630fad240e7.jpg"
          }
          alt="coffee"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-1 justify-start items-start z-20 group-active:text-white ease-in-out delay-100">
        <p className="font-semibold">{item.name}</p>
        <div className="flex w-full justify-between items-center">
          <p
            className={`text-white text-sm px-2 rounded-full group-active:bg-white group-active:text-black ease-in-out delay-100 ${bandageColor}`}
          >
            {item.category}
          </p>
          <p className="font-semibold">
            Rp. {item.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </button>
  );
}

export default ZCard;
