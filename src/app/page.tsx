import Caracteristicas from '@/components/pages/inicio/caracteristicas';
import Crea from '@/components/pages/inicio/crea';
import Hero from '@/components/pages/inicio/hero';
import Preguntas from '@/components/pages/inicio/preguntas';
import Versiones from '@/components/pages/inicio/versiones';

export default function Home() {
  return (
    <>
      <Hero />
      <Crea />
      <Versiones />
      <Caracteristicas />
      <Preguntas />
    </>
  );
}
