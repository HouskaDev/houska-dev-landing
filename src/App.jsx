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
        </div>
        <div className="flex-1 flex justify-center items-start text-white mx-2 md:mx-8 flex-col">
          <TypeAnimation
            sequence={[
              `Děláme design, který ✨.`,
              2000,
              "Programování je náš 🐴.",
              2000,
              "📱 aplikace? Není problém.",
              2000,
              "Ať o vašem podnikání ví celý 🌍.",
              2000,
              "Webové aplikace které 🛠️.",
              2000,
            ]}
            wrapper="span"
            className="xl:text-7xl md:text-5xl text-2xl text-center"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
}

export default App;
