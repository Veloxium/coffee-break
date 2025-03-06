import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-3/4 bg-amber-200 h-screen flex items-center justify-center">
        <p>Bagian Product</p>
      </div>
      <div className="w-1/4 bg-amber-300 h-screen flex items-center justify-center">
        <p>Bagian Checkout</p>
      </div>
    </div>
  );
}
