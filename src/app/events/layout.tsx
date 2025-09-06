import { FloatingSidebars } from "@/components/FloatingSidebars";

export default function EventsLayout({
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
