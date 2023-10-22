
const NumberRotation = ({ number }) => {
  const numbers = Array.from({ length: 60 }, (_, i) => i);

  // Determine the class for each number based on the current number
  const getClass = (num) => {
    if (number === num) return "opacity-100 transform-none";
    if (number > num) return "opacity-0 -translate-y-2";
    return "opacity-0 translate-y-2";
  };

  return (
    <div className="relative h-10 w-14 text-center  mx-auto">
      {numbers.map((num) => (
        <div
          key={num}
          className={`w-full h-full absolute transition-all duration-200 ${getClass(num)}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberRotation;