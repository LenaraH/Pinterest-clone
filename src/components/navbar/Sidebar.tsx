import { Tooltip } from "@mantine/core";
import {
  IconBell,
  IconHexagon,
  IconHome,
  IconMessageDots,
  IconSearch,
  IconSquarePlus,
} from "@tabler/icons-react";
import { PropsWithChildren } from "react";

type SideBarItemProps = PropsWithChildren & {
  label: string;
  toEnd?: boolean;
};
function SideBarItem({ label, children, toEnd }: SideBarItemProps) {
  return (
    <Tooltip label={label} position="right">
      <button
        className={`w-12 h-12 p-1 hover:bg-slate-200 rounded-md flex justify-center items-center ${toEnd && "mt-auto"}`}
      >
        {children}
      </button>
    </Tooltip>
  );
}
export function Sidebar() {
  return (
    <div className="border-r-[1px] border-slate-300 border-solid pt-4 pb-4 flex flex-col items-center gap-4 sticky top-0 h-screen">
      <SideBarItem label="Home">
        <IconHome size={24} />
      </SideBarItem>
      <SideBarItem label="Explore">
        <IconSearch size={24} />
      </SideBarItem>
      <SideBarItem label="Create">
        <IconSquarePlus size={24} />
      </SideBarItem>
      <SideBarItem label="Updates">
        <IconBell size={24} />
      </SideBarItem>
      <SideBarItem label="Messages">
        <IconMessageDots size={24} />
      </SideBarItem>
      <SideBarItem label="More options" toEnd>
        <IconHexagon size={24} />
      </SideBarItem>
    </div>
  );
}
