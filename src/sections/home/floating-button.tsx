import { Button } from "@/components/ui/button";
import { PiChatCircleText } from "react-icons/pi";

export default function FloatingButton() {

  return (
    <Button className="bg-primary-500 hover:bg-white hover:text-primary-500 px-3 py-3 rounded-full flex fixed bottom-16 right-16 text-white shadow h-15 w-15">
      <PiChatCircleText size={35} />
    </Button>
  )
}