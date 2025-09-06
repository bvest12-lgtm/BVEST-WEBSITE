import { FloatingSidebars } from "@/components/FloatingSidebars";

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingSidebars />
      {children}
    </>
  );
}
