'use client';

import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import { motion } from 'motion/react';

const caracteristicas = [
  {
    title: 'Soportamos 1 todos los minecrafts',
    description: `
      <p>We’ve been in the Minecraft server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we’ve branched out and now offer server hosting for 70+ other titles and counting.</p>
      <p>Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you’re ever feeling stuck, see our_ibrary of tutorials_or send in a support ticket and expect a response within about 15 minutes.</p>
    `,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1743104008_image%2017%20%281%29.png',
  },
  {
    title: 'Soportamos 2 todos los minecrafts',
    description: `
      <p>We’ve been in the Minecraft server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we’ve branched out and now offer server hosting for 70+ other titles and counting.</p>
      <p>Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you’re ever feeling stuck, see our_ibrary of tutorials_or send in a support ticket and expect a response within about 15 minutes.</p>
    `,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1743103997_image%2018%20%281%29.png',
  },
  {
    title: 'Soportamos 3 todos los minecraft',
    description: `
      <p>We’ve been in the Minecraft server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we’ve branched out and now offer server hosting for 70+ other titles and counting.</p>
      <p>Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you’re ever feeling stuck, see our_ibrary of tutorials_or send in a support ticket and expect a response within about 15 minutes.</p>
    `,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1743103982_ad3d96ef2797623aa5966ba4244aa2e1-removebg-preview%20%281%29%201.png',
  },
];

function CaracteristicasSections() {
  return (
    <div className="flex flex-col gap-24 w-full">
      {
        caracteristicas.map(({ description, image, title }) => (
          <motion.div
            key={title}
            className="grid md:grid-cols-2 gap-10 w-full items-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="font-black uppercase text-2xl md:text-3xl">
                {title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: description }} className="flex flex-col gap-6" />
            </div>
            <img
              src={image}
              alt={title}
              className="glassmorphism rounded-xl w-full max-w-lg justify-self-center"
            />
          </motion.div>
        ))
      }
    </div>
  );
}

export default function Caracteristicas() {
  return (
    <Section className="flex flex-col gap-14 my-32">
      <Title className="flex flex-col">
        <span>
          Características de
        </span>
        <span>
          nuestros servidores
        </span>
      </Title>
      <CaracteristicasSections />
    </Section>
  );
}
