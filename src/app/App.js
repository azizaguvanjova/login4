const App = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-custom-image bg-custom-size bg-center bg-no-repeat h-screen">
    <div>
      <div className="flex flex-col justify-start">
        <h1 className="text-gray-400 text-6xl font-bold mb-7">LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-[469px] h-[60px] border p-5 text-xl mb-5 input-special"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-[469px] h-[60px] border p-5 text-xl mb-10 input-special"
        />
        <button className="w-[250px] h-[60px] text-white font-semibold text-left text-2xl ml-10">
          Login
        </button>
      </div>
    </div>
  </div>
  )
}
export default App