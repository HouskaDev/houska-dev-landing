import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-black">
        <div className="m-4 text-white spacing leading-7 text-3xl flex items-end">
          <div>
            <p>Houska</p>
            <p>DEV.</p>
          </div>
          <div className="text-xl ml-3 cursor-pointer">
            <a
              href="https://discord.gg/KepBuZjn"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Discord
            </a>
          </div>
          <div className="text-xl ml-3 cursor-pointer">
            <a
              href="https://github.com/HouskaDev"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center text-white mx-8 flex-col">
          <TypeAnimation
            sequence={[
              `We 💘 building UX & UI`,
              2000,
              "We 💘 to programm Fullstack apps",
              2000,
              "We use GraphQL 📊",
              2000,
              "We are building 📱 apps",
              2000,
              "We 💘 to programm in React",
              2000,
              "We are 🆒 community",
              2000,
            ]}
            wrapper="span"
            className="xl:text-7xl md:text-5xl text-2xl"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
}

export default App;
