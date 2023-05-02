import useCustomHook from "./useCustomHook.js";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function FachData() {
  const { Data, erorr, loding } = useCustomHook(url);

  return (
    <div>
      {loding && <h1>Data is Loading</h1>}

      {erorr && <h2>{erorr}</h2>}
      {Data &&
        Data.map((e) => (
          <div key={e.id}>
            <h3>
              {e.id}: {e.title}
            </h3>
            <p>{e.body}</p>
          </div>
        ))}
    </div>
  );
}
