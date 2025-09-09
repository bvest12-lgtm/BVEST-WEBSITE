"use client";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, #012a20 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, #013b2e 0%, transparent 50%), radial-gradient(ellipse 100% 70% at 50% 50%, #050d18 0%, transparent 30%)",
            "radial-gradient(ellipse 70% 90% at 30% 20%, #013b2e 0%, transparent 50%), radial-gradient(ellipse 90% 60% at 70% 80%, #012a20 0%, transparent 50%), radial-gradient(ellipse 80% 80% at 40% 60%, #050d18 0%, transparent 30%)",
            "radial-gradient(ellipse 90% 70% at 10% 80%, #024a3a 0%, transparent 50%), radial-gradient(ellipse 70% 100% at 90% 20%, #013b2e 0%, transparent 50%), radial-gradient(ellipse 60% 90% at 60% 40%, #050d18 0%, transparent 30%)",
            "radial-gradient(ellipse 60% 80% at 80% 60%, #012a20 0%, transparent 50%), radial-gradient(ellipse 100% 70% at 20% 90%, #024a3a 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 50% 20%, #050d18 0%, transparent 30%)",
            "radial-gradient(ellipse 80% 60% at 20% 30%, #012a20 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, #013b2e 0%, transparent 50%), radial-gradient(ellipse 100% 70% at 50% 50%, #050d18 0%, transparent 30%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
