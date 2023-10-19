"use client";
import { Sidebar, useSidebar, Overlay, Button } from "@rewind-ui/core";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { useState } from "react";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { BiSolidUser, BiHash } from "react-icons/bi";
import { HiMiniInboxArrowDown, HiMoon } from "react-icons/hi2";
import { useRouter, usePathname } from "next/navigation";

export default function LogoSidebar({ children }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();
  const router = useRouter();

  return (
    <div className="relative flex h-full min-h-[35rem] w-full flex-row">
      <Sidebar
        color="white"
        shadow="lg"
        onToggle={(state) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="md:w-20"
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <Image src={Logo} width={48} height={48} alt="Logo" />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Tweet</Sidebar.Head.Title>
          <Sidebar.Head.Toggle className="" />
        </Sidebar.Head>
        <Sidebar.Nav className="flex h-full flex-row items-center">
          <Sidebar.Nav.Section className="w-full gap-3">
            <Sidebar.Nav.Section.Item
              icon={<AiFillHome size={25} />}
              label="Home"
              href="/home"
              active={pathname === "/home"}
              className={
                pathname === "/home"
                  ? "text-xl text-primary"
                  : "text-xl hover:text-primary"
              }
            />
            <Sidebar.Nav.Section.Item
              icon={<BiSolidUser size={20} />}
              label="Profile"
              href="/profile"
              active={pathname === "/profile"}
              className={
                pathname === "/profile"
                  ? "text-xl text-primary"
                  : "text-xl hover:text-primary"
              }
            />
            <Sidebar.Nav.Section.Item
              icon={<HiMiniInboxArrowDown size={20} />}
              label="Messages"
              href="/messages"
              active={pathname === "/messages"}
              className={
                pathname === "/messages"
                  ? "text-xl text-primary"
                  : "text-xl hover:text-primary"
              }
            />
            <Sidebar.Nav.Section.Item
              icon={<BiHash size={20} />}
              label="Trend"
              href="/trend"
              active={pathname === "/trend"}
              className={
                pathname === "/trend"
                  ? "text-xl text-primary"
                  : "text-xl hover:text-primary"
              }
            />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
        <Sidebar.Footer>
          <div className="flex items-center justify-center gap-3 text-sm">
            <HiMoon size={20} />
            <Button
              color=""
              tone="transparent"
              icon
              onClick={() => router.push("/setting")}
            >
              <AiTwotoneSetting size={20} />
            </Button>
          </div>
        </Sidebar.Footer>
      </Sidebar>

      <main
        className={`flex w-full transform flex-col items-center text-slate-700 transition-all duration-100 ${
          expanded ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            }}
            className="z-40 md:hidden"
          />
        )}
        <header className="sticky top-0 flex min-h-[4rem] w-full flex-row items-center border-b border-b-gray-100 bg-white px-8 shadow-sm md:hidden">
          <span>Navbar</span>

          <Button
            onClick={() => {
              sidebar.toggleMobile();
            }}
            size="md"
            color="white"
            icon
            className="ml-auto flex md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
              <path
                className="opacity-50"
                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              />
            </svg>
          </Button>
        </header>

        <div className="h-screen w-full p-8">{children}</div>
      </main>
    </div>
  );
}
