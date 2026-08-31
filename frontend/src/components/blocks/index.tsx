import type { Page, PageBlocks } from "@tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { ExtendDescriptionBlock } from "./extend-description";
import { FaqBlock } from "./faq";
import { HeroBlock } from "./hero";
import { HostingFeaturesBlock } from "./hosting-features";
import { LocationsBlock } from "./locations";
import { PaymentMethodsBlock } from "./payment-methods";
import { PricingBlock } from "./pricing";
import { VersionsBlock } from "./versions";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  if (!props.blocks) return null;
  return (
    <>
      {props.blocks.map((block, i) => {
        if (!block) return null;
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block {...block} />
          </div>
        );
      })}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <HeroBlock {...block} />;
    case "PageBlocksHostingFeatures":
      return <HostingFeaturesBlock {...block} />;
    case "PageBlocksVersions":
      return <VersionsBlock {...block} />;
    case "PageBlocksExtendDescription":
      return <ExtendDescriptionBlock {...block} />;
    case "PageBlocksLocations":
      return <LocationsBlock {...block} />;
    case "PageBlocksPricing":
      return <PricingBlock {...block} />;
    case "PageBlocksPaymentMethods":
      return <PaymentMethodsBlock {...block} />;
    case "PageBlocksFaq":
      return <FaqBlock {...block} />;
    default:
      return null;
  }
};
