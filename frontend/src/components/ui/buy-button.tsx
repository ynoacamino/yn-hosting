import Link from "next/link";

export function BuyButton() {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href="/solicitar-prueba-gratuita"
      className="mt-6 w-full rounded-md bg-primary py-3 text-center text-foreground text-lg shadow-xs hover:bg-primary/90"
    >
      Comprar ahora
    </Link>
  );
}
