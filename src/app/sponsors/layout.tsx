import { FloatingSidebars } from "@/components/FloatingSidebars";

export default function SponsorsLayout({
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
