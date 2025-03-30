'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const preguntas = [
  {
    title: '¿Cuál es el mejor hosting para servidores 1 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 2 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 3 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 4 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 5 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 6 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 7 de Minecraft?',
    path: '/',
  },
  {
    title: '¿Cuál es el mejor hosting para servidores 8 de Minecraft?',
    path: '/',
  },
];

function PreguntasList() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8">
      {
        preguntas.map(({ path, title }) => (
          <motion.span
            key={title}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: 0.4, once: true }}
            className="border-2 border-[#24282F] rounded-xl overflow-hidden"
            whileHover={{ borderColor: '#616671' }}
          >
            <Link
              href={path}
              className="p-4 md:p-6 gap-4  bg-[#171B22] text-lg md:text-xl flex  font-semibold"
            >
              <span className="w-full">
                {title}
              </span>
              <IconArrowRight className="size-16 opacity-0" />
            </Link>
          </motion.span>
        ))
      }
    </div>
  );
}

export default function Preguntas() {
  return (
    <Section className="flex flex-col gap-14 my-32">
      <Title className="flex flex-col">
        <span>
          Preguntas y respuestas
        </span>
        <span>
          frecuentes
        </span>
      </Title>

      <PreguntasList />
    </Section>
  );
}
