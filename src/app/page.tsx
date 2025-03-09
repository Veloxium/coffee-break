"use client";

import { Input } from "@/components/ui/input";
import ZCard from "@/components/zcard/zcard";
import {
  Apple,
  Beer,
  BookOpen,
  Citrus,
  Coffee,
  Cookie,
  Dessert,
  Leaf,
  ListX,
  LogOut,
  PenLine,
  Sandwich,
  Search,
  Soup,
} from "lucide-react";
import { useEffect, useState } from "react";
import products from "@/example/products.json";
import ZList from "@/components/zlist/zlist";

const category = [
  {
    name: "All Menu",
    icon: <BookOpen />,
    total: 20,
  },
  {
    name: "Coffee",
    icon: <Coffee />,
    total: 18,
  },
  {
    name: "Tea",
    icon: <Leaf />,
    total: 4,
  },
  {
    name: "Juice",
    icon: <Apple />,
    total: 6,
  },
  {
    name: "Soda",
    icon: <Beer />,
    total: 6,
  },
  {
    name: "Food",
    icon: <Soup />,
    total: 25,
  },
  {
    name: "Snack",
    icon: <Sandwich />,
    total: 10,
  },
  {
    name: "Dessert",
    icon: <Dessert />,
    total: 9,
  },
  {
    name: "Extra",
    icon: <Cookie />,
    total: 7,
  },
];

type productType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Menu");
  const [selectedItem, setSelectedItem] = useState<
    (productType & { quantity: number })[]
  >([]);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );

  let subtotal =
    selectedItem
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toLocaleString("id-ID") || 0;
  
  let tax =
    (
      selectedItem.reduce((acc, item) => acc + item.price * item.quantity, 0) *
      0.04
    ).toLocaleString("id-ID") || 0;
  
  let total =
    (
      selectedItem.reduce((acc, item) => acc + item.price * item.quantity, 0) +
      selectedItem.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.04
    ).toLocaleString("id-ID") || 0;

  let date = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const filterProduct = products.filter((item) => {
    if (selectedCategory === "All Menu") {
      return item;
    } else {
      return item.category === selectedCategory;
    }
  });

  const handleSelectItem = (item: productType) => {
    setSelectedItem((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen flex bg-zbase">
      <div className="w-3/4 h-screen flex flex-col items-center justify-start p-4">
        <div className="flex justify-between w-full gap-2">
          <div className="flex gap-2">
            <button className="btn px-4 py-2">
              <Citrus />
            </button>
            <p className="text-zprimary bg-white rounded-md font-semibold px-4 py-2">
              {date}
            </p>
            <p className="text-zprimary bg-white rounded-md font-semibold px-4 py-2 uppercase">
              {time}
            </p>
          </div>
          <div className="relative flex-1 bg-white rounded-md flex items-center">
            <Input
              placeholder="Search Menu"
              className=" h-full focus-visible:ring-zprimary shadow-none border-none"
            />
            <Search className="absolute right-4 text-zprimary" />
          </div>
          <button className="btn px-4 py-2 font-semibold flex gap-2">
            Logout <LogOut />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-scroll w-full no-scrollbar my-2 pb-2">
          <div className="flex gap-4">
            {category.map((item, i) => (
              <button
                key={i}
                className={`h-32 w-32 btn flex flex-col items-start justify-between font-semibold p-2 gap-2 ${
                  selectedCategory === item.name
                    ? "border-zprimary bg-zprimary-100"
                    : ""
                }`}
                onClick={() => setSelectedCategory(item.name)}
              >
                <div className="w-10 h-10 bg-zprimary rounded-full place-content-center place-items-center text-white ">
                  {item.icon}
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm">{item.total} Items</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll z-scrollbar w-full pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full">
            {filterProduct.map((item, i) => (
              <ZCard
                key={i}
                item={item}
                onClick={() => handleSelectItem(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-white h-screen flex flex-col items-start justify-start p-4">
        <div className="flex w-full">
          <button onClick={
            () => setSelectedItem([])
          } className="h-10 w-10 btn border-zbase place-content-center place-items-center">
            <ListX />
          </button>
          <div className="flex flex-col flex-1 px-4 items-center">
            <p className="text-lg">Customer's Name</p>
            <p className="text-sm">Order Number #1000</p>
          </div>
          <div className="h-10 w-10 btn border-zbase place-content-center place-items-center">
            <PenLine />
          </div>
        </div>
        <div className="w-full h-full pt-2">
          <div className="w-full h-96 flex flex-col gap-2 pr-2 z-scrollbar overflow-auto">
            {selectedItem.map((item, i) => (
              <ZList key={i} item={item} />
            ))}
            {selectedItem.length === 0 && (
              <p className="text-center mt-4">No item selected</p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2">
          <div className="flex justify-between w-full">
            <p>Subtotal</p>
            <div className="flex gap-2">
              <p>Rp.</p>
              <p>{subtotal}</p>
            </div>
          </div>
          <div className="flex justify-between w-full text-gray-400">
            <p>Tax 4%</p>
            <div className="flex gap-2">
              <p>Rp.</p>
              <p>{tax}</p>
            </div>
          </div>
          <div className="flex justify-between w-full my-2">
            <p className="text-lg">Total</p>
            <div className="flex gap-2">
              <p>Rp.</p>
              <p>{total}</p>
            </div>
          </div>
          <button className="border-zprimary border-2 px-4 py-2 rounded-md place-content-center place-items-center">
            <p>Payment Method</p>
          </button>
          <button className="bg-zprimary h-16 w-full text-white place-content-center place-items-center">
            <p>Place Order</p>
          </button>
        </div>
      </div>
    </div>
  );
}
