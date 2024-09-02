import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="lg:grid h-full lg:grid-cols-[16rem_1fr] max-lg:flex max-lg:flex-col gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
