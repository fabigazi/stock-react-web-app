function Destructing() {
  const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer",
  };

  const name = person.name;
  const { age, city, job } = person;

  const numbers = [1, 2, 3, 4, 5];

  const first = numbers[0];
  const second = numbers[1];

  const [one, two, three, four, five] = numbers;

  function add(a, b) {
    return a + b;
  }

  const result = add(2, 3);

  function subtract({ a, b }) {
    // const a = param.a;
    // const b = param.b;
    return a - b;
  }

  function tuitThis({ tuit }) {
    // const tuit = obj.tuit;
    console.log(tuit.topic);
  }

  tuitThis({ tuit: { topic: "Space", userName: "spacex" } });

  const result2 = subtract({ a: 2, b: 3 });

  return (
    <div>
      <h1>Destructing</h1>
      <h2>Object Destructing</h2>
      <p>
        {person.name} is {age} years old and lives in {person.city}.
      </p>
      <h2>Array Destructing</h2>
    </div>
  );
}

export default Destructing;
