import Arrow from "../assets/right-arrow.svg"

export default function Introduction({ onPageChange }) {
  const handleButtonChange = (nav) => {
    onPageChange(nav);
  };
  return (
    <div className="container mx-auto px-4 flex items-center justify-center m-16">
      <div className="bg-white rounded-full shadow-round">
        <div className="rounded-full overflow-hidden">
          <img
            src="https://media.discordapp.net/attachments/1125242863446413322/1128362365583376476/Screenshot_20230705_082731_Instagram.jpg?width=653&height=611"
            alt="Profile Pic"
            className="object-none"
            style={{
              height: 500,
              width: 500,
            }}
          />
        </div>
      </div>
      <div className="ml-5 p-4 rounded-2xl">
        <p className="text-7xl font-serif">I'm</p>
        <p className="text-8xl font-serif">Danny</p>
        <p className="text-9xl font-serif">Setiawan Syah</p>
        <p className="text-3xl font-serif mt-3">Fullstack Developer</p>
        <div className="flex justify-center">
          <button
            className="flex items-center absolute right-36 mt-5 font-bold text-xl rounded-full bg-gray-500 text-white py-3 px-6 hover:bg-gray-600 active:bg-gray-700 active:shadow-md active:shadow-gray-400"
            onClick={() => handleButtonChange("aboutPage")}
          >
            About
            <img
              src={Arrow}
              alt="Arrow"
              className="w-9 h-8"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
