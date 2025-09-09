import { FloatingSidebars } from "@/components/FloatingSidebars";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedBackground />
      <FloatingSidebars />
      {children}
    </>
  );
}
