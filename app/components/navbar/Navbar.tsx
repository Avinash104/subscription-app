"use client"

import useSubModal from "@/app/hooks/useSubModal"
import { AiFillStar } from "react-icons/ai"

const Navbar = () => {
  const subModal = useSubModal()
  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-around">
        <h2 className="text-3xl">Navbar</h2>
        <div onClick={subModal.onOpen}>
          <AiFillStar size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
