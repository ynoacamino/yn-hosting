"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDevice } from "@/components/providers/DeviceProvider";
import { extractImageUrl } from "@/lib/directus";
import type { ExtendDescriptionFeature } from "@/types/directus";

interface ExtendDescriptionSectionsProps {
  extendDescription: ExtendDescriptionFeature[];
}

export default function ExtendDescriptionSections({
  extendDescription,
}: ExtendDescriptionSectionsProps) {
  const { isMobile } = useDevice();

  return (
    <div className="flex w-full flex-col gap-24">
      {extendDescription.map(({ content, image, title }) => (
        <motion.div
          key={title}
          className="grid w-full items-center gap-10 md:grid-cols-2"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ amount: isMobile ? 0.24 : 0.35, once: true }}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <h3 className="font-black text-2xl uppercase md:text-3xl">
              {title}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="flex flex-col gap-6"
            />
          </div>
          <Image
            src={extractImageUrl(image)}
            alt={title}
            width={512}
            height={320}
            className="glassmorphism w-full max-w-lg justify-self-center rounded-xl"
          />
        </motion.div>
      ))}
    </div>
  );
}
