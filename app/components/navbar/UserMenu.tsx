"use client"

import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"
// import useRentmodal from "@/app/hooks/useRentModal"
import { SafeUser } from "@/app/types"

import { signOut } from "next-auth/react"
import { useCallback, useState } from "react"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"
import Avatar from "../Avatar"
import MenuItem from "./MenuItem"

interface NavbarProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  //   const onRent = useCallback(() => {
  //     if (!currentUser) return loginModal.onOpen()

  //     rentModal.onOpen()
  //   }, [currentUser, loginModal, rentModal])

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          //   onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {currentUser ? (
              <>
                <Avatar src={currentUser?.image} />{" "}
              </>
            ) : (
              <>
                <AiOutlineUser />{" "}
              </>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorities" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                {/* <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" /> */}
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu