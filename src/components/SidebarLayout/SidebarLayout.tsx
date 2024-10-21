import { PropsWithChildren } from "react";

export function SideBarLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="grid grid-cols-[70px_1fr] grid-rows-[1fr] gap-0">
      {children}
    </div>
  );
}
