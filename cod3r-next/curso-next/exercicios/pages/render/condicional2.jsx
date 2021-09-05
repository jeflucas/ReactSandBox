import If from "../../components/if";

export default function condicional2() {
  const num = 2;
  return (
    <div>
      <If teste={num % 2 == 0}>
        <h2>{num} é par</h2>
      </If>
    </div>
  );
}
