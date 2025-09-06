import { FloatingSidebars } from "@/components/FloatingSidebars";

export default function TeamLayout({
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
