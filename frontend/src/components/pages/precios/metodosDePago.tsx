import Image from "next/image";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { PreciosSections } from "@/config/pages";
import { extractImageUrl } from "@/lib/directus";
import { apiService } from "@/services/api";
import MetodosDePagoClient from "./metodosDePagoClient";

export default async function MetodosDePago() {
  const paymentMethods = await apiService.getPaymentMethods();

  return (
    <Section
      id={PreciosSections.METODOS_DE_PAGO}
      className="my-20 flex flex-col gap-16"
    >
      <Title>
        <span>ACEPTAMOS TODAS LAS</span>
        <span>BILLETERAS DIGITALES</span>
      </Title>
      <div className="mb-18 grid w-full max-w-4xl items-center justify-center gap-30 md:grid-cols-3">
        {paymentMethods.map(({ name, image }) => (
          <div
            key={name}
            className="relative transition-transform hover:scale-105"
          >
            <Image
              src={extractImageUrl(image)}
              alt={name}
              width={256}
              height={256}
              className="absolute top-0 left-0 -z-10 aspect-square w-full justify-self-center rounded-lg object-contain blur-lg"
            />
            <Image
              src={extractImageUrl(image)}
              alt={name}
              width={256}
              height={256}
              className="z-20 aspect-square w-full justify-self-center rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
      <MetodosDePagoClient />
    </Section>
  );
}
