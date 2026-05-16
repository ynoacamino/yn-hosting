import Image from "next/image";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { InicioSections } from "@/config/pages";
import { IconMapper } from "@/lib/icons";
import { apiService } from "@/services/api";
import type { VersionsFeature } from "@/types/directus";

const javaBedrock = [
  {
    image:
      "https://ynoa-uploader.ynoacamino.me/uploads/1743101369_image%2013.png",
    title: "Minecraft Java",
  },
  {
    image:
      "https://ynoa-uploader.ynoacamino.me/uploads/1743101357_image%20%283%29.png",
    title: "Minecraft Bedrock",
  },
];

function VersionsJavaBedrock() {
  return (
    <div className="grid w-full gap-8 sm:grid-cols-2">
      {javaBedrock.map(({ image, title }) => (
        <div
          key={title}
          className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-6 transition-colors hover:border-[#616671] md:gap-8 md:p-8"
        >
          <Image
            className="rounded-xl"
            src={image}
            alt={title}
            width={384}
            height={256}
          />
          <h3 className="w-full max-w-xs text-center font-black text-2xl uppercase md:text-4xl">
            {title}
          </h3>
        </div>
      ))}
    </div>
  );
}

interface OtherVersionsProps {
  versionsFeatures: VersionsFeature[];
}

function OtherVersions({ versionsFeatures }: OtherVersionsProps) {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {versionsFeatures.map(({ content, title, icon }) => (
        <div
          key={title}
          className="relative flex flex-col gap-3 rounded-xl border-2 border-[#24282F] bg-[#171B22] p-4 pb-10 transition-colors hover:border-[#616671] md:gap-4 md:p-6"
        >
          <IconMapper className="mb-3 size-11 md:size-16" name={icon.name} />
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="">{content}</p>
        </div>
      ))}
    </div>
  );
}

export default async function Versiones() {
  const versionsFeatures = await apiService.getVersionsFeatures();

  return (
    <Section
      id={InicioSections.SOPORTAMOS_TODOS_LOS_MINECRAFTS}
      className="my-32 flex flex-col gap-14"
    >
      <Title className="flex flex-col">
        <span>Soportamos todos</span>
        <span>los minecraft&apos;s</span>
      </Title>
      <div className="flex w-full flex-col gap-8">
        <VersionsJavaBedrock />
        <OtherVersions versionsFeatures={versionsFeatures} />
      </div>
    </Section>
  );
}
