import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-3/4 p-4 h-screen flex flex-col items-center justify-start gap-2">
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <p className="bg-blue-400 px-4 py-2">Icon Nav</p>
            <p className="bg-blue-400 px-4 py-2">Calendar</p>
            <p className="bg-blue-400 px-4 py-2">Time</p>
          </div>
          <p className="bg-blue-400 px-4 py-2">Logout</p>
        </div>
        <div className="flex gap-4 overflow-x-scroll w-full no-scrollbar">
          <div className="flex gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-32 w-32 bg-blue-300">
                <p>Menu Category</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-12 bg-blue-200">
          <p>SearchBar</p>
        </div>
        <div className="flex-1 overflow-y-scroll no-scrollbar w-full">
          <div className="grid grid-cols-5 gap-4 w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-full h-40 bg-blue-300">
                <p>Menu Item</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-amber-300 h-screen flex items-center justify-center">
        <p>Bagian Checkout</p>
      </div>
    </div>
  );
}
