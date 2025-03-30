import Link from 'next/link';
import pagesConfig from '@/config/pages';
import ColumnLinks from './ColumnLinks';

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-7">
      {
        pagesConfig.pages.map((page) => (
          <ColumnLinks
            key={page.path}
            {...page}
          />
        ))
      }
      <Link href="https://acm.org" className="flex justify-center basis-36 max-h-60 grow self-center">
        <img
          src="https://ynoa-uploader.ynoacamino.site/uploads/1743369112_Component%201%20%285%29.png"
          alt="Yn Hosting Logo"
          className="w-full h-full"
        />
      </Link>
    </div>
  );
}
