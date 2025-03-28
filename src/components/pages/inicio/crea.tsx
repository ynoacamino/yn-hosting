'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { IconServerBolt } from '@tabler/icons-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/1',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/2',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/3',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/4',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/5',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
  {
    icon: IconServerBolt,
    title: 'Servidores & Soporte 24/6',
    description: 'El mejor equipo de atención al cliente de la industria con asistencia de chat en vivo las 24/7 de administradores de servidores.',
  },
];

function CreaCards() {
  return (
    <div className="glassmorphism w-full rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {
        features.map((feature) => (
          <motion.div
            key={feature.title}
            className="flex flex-col gap-4 bg-[#111928]/75 rounded-lg p-6 pb-10 backdrop-blur-lg"
            initial={{ opacity: 0.4, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ bounce: 0.3, type: 'spring', duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <feature.icon className="size-16 mb-3" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))
      }
    </div>
  );
}

export default function Crea() {
  return (
    <Section className="flex flex-col gap-14 my-32">
      <Title className="flex flex-col">
        <span>
          Crea tu servidor
        </span>
        <span>
          de Minecraft
        </span>
      </Title>
      <CreaCards />
    </Section>
  );
}
