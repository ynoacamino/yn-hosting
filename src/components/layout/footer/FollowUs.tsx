import { IconBrandWhatsapp } from '@tabler/icons-react';
import {
  Facebook,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';

export default function FollowUs() {
  return (
    <div className="flex gap-6 flex-wrap">
      <span className="font-medium">Contactanos</span>
      <Link
        href="https://instagram.com"
        className="hover:text-muted-foreground"
      >
        <Instagram strokeWidth="1.5" />
      </Link>
      <Link
        href="https://pe.linkedin.com"
        className="hover:text-muted-foreground"
      >
        <Facebook strokeWidth="1.5" />
      </Link>
      <Link
        href="https://youtube.com"
        className="hover:text-muted-foreground"
      >
        <IconBrandWhatsapp strokeWidth="1.5" />
      </Link>
    </div>
  );
}
