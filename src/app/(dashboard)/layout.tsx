import { Header } from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
