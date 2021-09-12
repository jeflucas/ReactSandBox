import Filho from "./Filho";

export default function Pai() {
  return (
    <div>
      <Filho nome="João" familia="Albuquerque" />
      <Filho nome="Marcos" familia="Albuquerque" />
      <Filho nome="Aline" familia="Albuquerque" />
    </div>
  );
}
