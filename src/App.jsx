import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold ">Simple Crud</h1>

      <form
        onSubmit={handleAddUser}
        className="bg-blue-50 w-1/3 mx-auto p-4 rounded-md"
      >
        <div className="inputs  ">
          <input
            className="px-7 py-3 m-3 "
            type="text"
            name="name"
            id=""
            placeholder="enter your name"
          />
          <input
            className="px-7 py-3 m-3 "
            type="email"
            name="email"
            id=""
            placeholder="enter your email"
          />
          <input
            className="px-7 py-3 m-3 "
            type="password"
            name="password"
            id=""
            placeholder="enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-xl rounded-md text-white font-bold p-3"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
