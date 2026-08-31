import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/config/variables";

export default function FollowUs() {
  return (
    <div className="flex flex-wrap gap-6">
      <span className="font-medium">Contactanos</span>
      <Link href={WHATSAPP_URL} className="hover:text-muted-foreground">
        <IconBrandWhatsapp strokeWidth="1.5" />
      </Link>
    </div>
  );
}
