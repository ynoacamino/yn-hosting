'use client';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { motion } from 'motion/react';

const skills = [
  'Server hosting for 70+ games',
  'Minijuegos Prefabricados',
  'Soporte 24/7 en Chats y Tickets',
  'Full file access',
];

function Skills() {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-3">
      {
      skills.map((skill, i) => (
        <motion.span
          key={skill}
          className="min-w-fit flex gap-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <IconCircleCheckFilled className="fill-primary" />
          {skill}
        </motion.span>
      ))
    }
    </div>
  );
}

export default function Hero() {
  return (
    <Section className="grid md:grid-cols-2 my-6 md:my-20">
      <div className="flex flex-col gap-6 md:gap-10">
        <h1 className="uppercase font-black text-4xl md:text-5xl w-full max-w-md tracking-wider flex flex-col gap-4">
          <span>
            Hosting de servidores de minecraft
          </span>
          {/* <motion.span
            className="text-6xl"
            transition={{ delay: 0.2 }}
            animate={{ rotateX: 50, opacity: 0 }}
          >
            Bedrock
          </motion.span> */}
        </h1>
        <Skills />
        <div>
          <Button size="lg">
            Comenzar ahora
          </Button>
        </div>
      </div>
      <motion.div
        className="w-full flex items-center justify-center md:justify-end my-10 md:my-0 md:h-[40rem]"
        animate={{ y: 15 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeIn',
          bounce: 0.04,
          repeatType: 'reverse',
        }}
      >

        <img
          src="https://ynoa-uploader.ynoacamino.site/uploads/1743018518_image.webp"
          alt="Minecraft"
          className="w-full max-w-2xs md:max-w-sm"
          fetchPriority="high"
        />
      </motion.div>
    </Section>
  );
}
