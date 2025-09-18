import { UseLogin } from "@/hooks/useAuthenticate";
export default function Home() {

  const user = UseLogin();

  return (
    <>
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center bg-blue-950 max-w-3xl p-3 m-36 rounded-2xl">
      <h1 className="font text-center m-5 font-bold text-2xl">Login</h1>
      <div className="flex flex-col w-100 items-center">
      <label htmlFor="" className="mb-1 mt-1">Name</label>
      <input className="bg-blue-500 text-black p-0.5 rounded-2xl" type="text" name="" id="" value={user.name} required onChange={(e) => user.setName(e.target.value)}/>
      <label htmlFor="" className="mb-0.5 mt-1">Password</label>
      <input className="bg-blue-500 text-black p-0.5 rounded-2xl" type="password" name="" id="" value={user.password} required onChange={(e) => user.setPassword(e.target.value)}/>

      <input className="bg-blue-600 text-black ml-1.5 m-2 p-2 rounded-2xl cursor-pointer" type="submit" value="Login" onClick={() => user.API()} />
      </div>
    </div>
    </section>
    </>
  );
}
