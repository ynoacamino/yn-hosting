import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

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
    <div className="w-full grid grid-cols-2 gap-8">
      {
        preguntas.map(({ path, title }) => (
          <Link
            href={path}
            key={title}
            className="p-6 gap-4 rounded-xl border-2 border-[#24282F] bg-[#171B22] text-xl flex hover:border-[#616671] transition-colors"
          >
            <span className="w-full">
              {title}
            </span>
            <IconArrowRight className="size-16 opacity-0" />
          </Link>
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
