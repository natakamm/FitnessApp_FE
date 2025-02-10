const AnimateText = () => {
  return (
    <div className="w-full overflow-hidden bg-customAccent2 py-2">
      <div className="flex gap-8 whitespace-nowrap animate-scroll">
        {[...Array(10)].map((_, index) => (
          <span key={index} className="flex">
            <h1 className="text-white text-4xl italic font-extrabold font-inter">
              MOVE.
            </h1>
            <h1 className="text-white text-4xl italic font-extrabold font-inter">
              GROW.
            </h1>
            <h1 className="text-white text-4xl italic font-extrabold font-inter">
              EVOLVE
            </h1>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimateText;
