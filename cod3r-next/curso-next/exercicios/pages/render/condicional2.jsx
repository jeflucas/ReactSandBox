import If from "../../components/if";

export default function condicional2() {
  const num = 5;
  return (
    <div>
      <If teste={num % 2 == 0}>
        <h2>{num} é par</h2>
      </If>
      <If teste={num % 2 != 0}>
        <h2>{num} é impar</h2>
      </If>
    </div>
  );
}
