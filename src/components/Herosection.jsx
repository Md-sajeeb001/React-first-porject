const Herosection = () => {
  return (
      <div className="hero my-20 w-11/12 mx-auto">
        <div className="hero-content flex-col grid grid-cols-2 justify-between lg:flex-row-reverse">
          <div>
            <img
              src="./public/shoes.png"
              className="w-[400px]"
            />
          </div>

          <div className="max-h-[400px]">
            <h1 className="text-7xl font-extrabold">
              Choose Your Won Boat To Style Your Self
            </h1>
            <p className="py-6 text-lg font-medium text-gray-700">
              Consider men's boat shoes the dressed-down, low-key version of
              loafers.If laces are present,
              they're either abbreviated or permanently laced for you.
            </p>
            <button className="btn btn-error text-white">Shop Now</button>
          </div>
        </div>
      </div>
  );
};

export default Herosection;
