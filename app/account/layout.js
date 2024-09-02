import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="md:grid h-full md:grid-cols-[16rem_1fr] max-md:flex max-md:flex-col gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
