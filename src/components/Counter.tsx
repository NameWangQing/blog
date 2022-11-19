import { createSignal } from "solid-js";

export function Counter(props: any) {
  const [count, setCount] = createSignal(props.count);

  return (
    <div className="nihao">
      counter {count()}
      <button onClick={() => setCount(count() + 1)}>click</button>
    </div>
  );
}
