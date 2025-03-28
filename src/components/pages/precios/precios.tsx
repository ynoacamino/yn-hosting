import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { MemoryStick } from 'lucide-react';

const precios = [
  {
    name: 'Carbon',
    desciption: 'Para jugadores que buscan un servidor de Minecraft asequible y confiable.',
    price: '19',
    features: [
      {
        icon: MemoryStick,
        title: '2GB de RAM',
      },
      {
        icon: MemoryStick,
        title: '2.5G Almacenamiento SSD',
      },
      {
        icon: MemoryStick,
        title: '1 Base de datos (MySQL)',
      },
      {
        icon: MemoryStick,
        title: 'Panel de control',
      },
      {
        icon: MemoryStick,
        title: 'DDoS Protección',
      },
      {
        icon: MemoryStick,
        title: 'Soporte 24/7',
      },
      {
        icon: MemoryStick,
        title: '1 Respaldo manual',
      },
    ],
  },
  {
    name: 'Diamante',
    desciption: 'Para jugadores que buscan un servidor de Minecraft asequible y confiable.',
    price: '19',
    features: [
      {
        icon: MemoryStick,
        title: '2GB de RAM',
      },
      {
        icon: MemoryStick,
        title: '2.5G Almacenamiento SSD',
      },
      {
        icon: MemoryStick,
        title: '1 Base de datos (MySQL)',
      },
      {
        icon: MemoryStick,
        title: 'Panel de control',
      },
      {
        icon: MemoryStick,
        title: 'DDoS Protección',
      },
      {
        icon: MemoryStick,
        title: 'Soporte 24/7',
      },
      {
        icon: MemoryStick,
        title: '1 Respaldo manual',
      },
    ],
  },
  {
    name: 'Netherita',
    desciption: 'Para jugadores que buscan un servidor de Minecraft asequible y confiable.',
    price: '19',
    features: [
      {
        icon: MemoryStick,
        title: '2GB de RAM',
      },
      {
        icon: MemoryStick,
        title: '2.5G Almacenamiento SSD',
      },
      {
        icon: MemoryStick,
        title: '1 Base de datos (MySQL)',
      },
      {
        icon: MemoryStick,
        title: 'Panel de control',
      },
      {
        icon: MemoryStick,
        title: 'DDoS Protección',
      },
      {
        icon: MemoryStick,
        title: 'Soporte 24/7',
      },
      {
        icon: MemoryStick,
        title: '1 Respaldo manual',
      },
    ],
  },
];

export default function Precios() {
  return (
    <Section className="flex flex-col gap-16 my-20">
      <Title>
        <span>
          ELIGUE EL MEJOR
        </span>
        <span>
          PARA TI
        </span>
      </Title>
      <div className="glassmorphism grid grid-cols-3 w-full rounded-lg gap-6 p-6">
        {
          precios.map(({
            desciption, features, name, price,
          }) => (
            <div
              key={name}
              className="flex flex-col gap-4 bg-[#111928]/75 rounded-lg p-6 pb-10 backdrop-blur-lg justify-center items-center"
            >
              <h3 className="text-center font-black uppercase text-4xl">
                {name}
              </h3>
              <p className="text-center text-foreground/70">
                {desciption}
              </p>
              <div className="flex justify-center my-9">
                <span className="text-4xl">
                  S/
                </span>
                <span className="font-semibold text-7xl">
                  {price}
                </span>
                <span className="flex items-end text-xl">
                  /mes
                </span>
              </div>

              <div className="flex flex-col items-start justify-start gap-3 w-fit">
                {
                  features.map(({ icon: Icon, title }) => (
                    <div key={title} className="flex gap-3 items-center">
                      <Icon className="size-7 stroke-1" />
                      <span>
                        {title}
                      </span>
                    </div>
                  ))
                }
              </div>
              <Button size="lg" className="w-full mt-6">
                Comprar
              </Button>
            </div>
          ))
        }
      </div>
    </Section>
  );
}
