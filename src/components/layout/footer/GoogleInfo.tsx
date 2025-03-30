import Link from 'next/link';

const googleInfo = [
  { name: 'Acerca de Google', url: 'https://about.google' },
  { name: 'Productos de Google', url: 'https://about.google/products' },
  { name: 'Privacidad', url: 'https://policies.google.com/privacy' },
  { name: 'Términos', url: 'https://policies.google.com/terms' },
  { name: 'Ayuda', url: 'https://support.google.com/?hl=es' },
];

export default function GoogleInfo() {
  return (
    <div className="flex gap-7 text-muted-foreground text-sm flex-wrap">
      {
        googleInfo.map(({ name, url }) => (
          <Link key={name} href={url}>{name}</Link>
        ))
      }
    </div>
  );
}
