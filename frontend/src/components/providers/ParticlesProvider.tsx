"use client";

import type { Engine } from "@tsparticles/engine";
import { NextParticles, NextParticlesProvider } from "@tsparticles/nextjs";

const init = async (engine: Engine): Promise<void> => {
  const { loadSlim } = await import("@tsparticles/slim");

  await loadSlim(engine);
};

export default function TsParticlesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextParticlesProvider init={init}>
      <NextParticles
        id="tsparticles"
        className="absolute"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -20,
          },

          background: {
            color: "transparent",
          },

          fpsLimit: 60,

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },

            paint: {
              color: {
                value: "#a855f7",
              },
            },
            shape: {
              type: "circle",
            },

            opacity: {
              value: {
                min: 0.1,
                max: 0.9,
              },

              animation: {
                enable: true,
                speed: 0.8,
                sync: false,
              },
            },

            size: {
              value: {
                min: 1,
                max: 7,
              },

              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },

            move: {
              enable: true,
              speed: 1.5,
              random: true,
              straight: false,

              outModes: {
                default: "out",
              },
            },

            links: {
              enable: false,
            },

            shadow: {
              enable: true,
              color: "#a855f7",
              blur: 15,
            },
          },

          detectRetina: true,
        }}
      />

      {children}
    </NextParticlesProvider>
  );
}
