"use client"

import useSubModal from "@/app/hooks/useSubModal"
import { SafeUser } from "@/app/types"
import { AiFillStar, AiOutlineLogin } from "react-icons/ai"
import Container from "../Container"
import UserMenu from "./UserMenu"

interface NavProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  const subModal = useSubModal()
  return (
    // <div className="fixed w-full">
    //   <div className="flex items-center justify-around">
    //     <h2 className="text-3xl">Navbar</h2>
    //     <div onClick={subModal.onOpen}>
    //       <AiFillStar size={30} />
    //       <AiOutlineLogin size={30} />
    //     </div>
    //   </div>
    // </div>
    <div className="fixed w-full shadow-sm bg-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-around gap-3 md:gap-0 ">
            {/* <Logo />
            <Search /> */}
            <UserMenu currentUser={currentUser} />
            <button onClick={() => console.log(currentUser?.name)}>
              {" "}
              User{" "}
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
