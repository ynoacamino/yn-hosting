import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BuyButton } from "@/components/ui/buy-button";
import Cube3d from "@/components/ui/cube3d";
import { Glass } from "@/components/ui/glass";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { extractImageUrl } from "@/lib/directus";
import { apiService } from "@/services/api";

export default async function Locations() {
  const locations = await apiService.getLocations();

  const ownLocations = locations.slice(0, -1);
  const externalLocation = locations[locations.length - 1];

  return (
    <Section
      id={InicioSections.DESCUBRE_NUESTRAS_UBICACIONES}
      className="my-32 flex flex-col gap-14"
    >
      <Title className="flex flex-col">
        <span>Descubre nuestras</span>
        <span>ubicaciones</span>
      </Title>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="glassmorphism col-span-2 grid w-full gap-6 rounded-xl p-6 sm:grid-cols-2 md:gap-6 md:p-6">
          {ownLocations.map(
            ({ description, latency, name, qualification, mc_icon, block }) => (
              <div key={name} className="flex flex-col gap-4">
                <Glass className="flex justify-between gap-4 p-2">
                  <Image
                    src={extractImageUrl(mc_icon)}
                    alt={name}
                    width={64}
                    height={64}
                    className="aspect-square w-16 rounded-md"
                  />
                  <h3 className="flex w-full items-center justify-center text-center font-black text-xl uppercase">
                    {name}
                  </h3>
                </Glass>
                <Glass
                  className="flex flex-1 flex-col gap-4"
                  paddingBottom="xl"
                >
                  <div
                    className="prose-zinc"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                </Glass>
                <Glass className="flex justify-between gap-4">
                  <span className="mb-1">Latencia:</span>
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-9"
                      src="https://cms.enderhost.net.pe/assets/6af82cc9-9a90-40d8-b70b-37754575c524"
                      alt="ping"
                      width={36}
                      height={36}
                    />
                    <span>{latency} ms</span>
                  </div>
                </Glass>
                <Glass className="flex justify-between gap-4">
                  <span>Calificación:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: qualification }).map((_, index) => (
                        <Image
                          key={`${name}-star-${index}`}
                          className="w-7"
                          src="https://cms.enderhost.net.pe/assets/a676eda0-4771-43eb-b053-cb16473517ab"
                          alt="star"
                          width={28}
                          height={28}
                        />
                    ))}
                  </div>
                </Glass>
                <Glass className="flex flex-col items-center justify-center gap-10 py-12">
                  <Cube3d texture={extractImageUrl(block)} />
                  <BuyButton />
                </Glass>
              </div>
            ),
          )}
        </div>
        <div className="glassmorphism-diamond grid w-full gap-6 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            <Glass className="flex justify-between gap-4 p-2">
              <Image
                src={extractImageUrl(externalLocation.mc_icon)}
                alt={externalLocation.name}
                width={64}
                height={64}
                className="aspect-square w-16 rounded-md"
              />
              <h3 className="flex w-full items-center justify-center text-center font-black text-xl uppercase">
                {externalLocation.name}
              </h3>
            </Glass>
            <Glass className="flex flex-1 flex-col gap-4" paddingBottom="xl">
              <div
                className="prose-zinc"
                dangerouslySetInnerHTML={{
                  __html: externalLocation.description,
                }}
              ></div>
            </Glass>
            <Glass className="flex justify-between gap-4">
              <span className="mb-1">Latencia:</span>
              <div className="flex items-center gap-2">
                  <Image
                    className="w-9"
                    src="https://cms.enderhost.net.pe/assets/4916b66a-7a0e-45d5-a65b-1d8194e1ffe6"
                    alt="ping"
                    width={36}
                    height={36}
                  />
                <span>{externalLocation.latency} ms</span>
              </div>
            </Glass>
            <Glass className="flex justify-between gap-4">
              <span>Calificación:</span>
              <div className="flex items-center gap-1">
                    {Array.from({ length: externalLocation.qualification }).map(
                      (_, index) => (
                        <Image
                          key={`${externalLocation.name}-star-${index}`}
                          className="w-7"
                          src="https://cms.enderhost.net.pe/assets/a676eda0-4771-43eb-b053-cb16473517ab"
                          alt="star"
                          width={28}
                          height={28}
                        />
                      ),
                    )}
              </div>
            </Glass>
            <Glass className="flex flex-col items-center justify-center gap-10 py-12">
              <Cube3d texture={extractImageUrl(externalLocation.block)} />
              <Button
                size="lg"
                className="mt-6 w-full opacity-0 disabled:opacity-0"
                disabled
              >
                Comprar ahora
              </Button>
            </Glass>
          </div>
        </div>
      </div>
    </Section>
  );
}
