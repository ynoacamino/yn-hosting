"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function WhatsappButton() {
  return (
    <motion.a
      href="/solicitar-prueba-gratuita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-100 rounded-full bg-green-500 p-3 shadow-lg hover:bg-green-400"
      animate={{
        x: [0, -5, 5, -5, 5, 0],
        rotate: [0, -6, 6, -6, 6, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      <IconBrandWhatsapp className="size-12 text-white transition-colors" />
    </motion.a>
  );
}
