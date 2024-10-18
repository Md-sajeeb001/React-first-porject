const Navbar = () => {
  return (
    <nav className="navigationBar w-11/12 mx-auto ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-lg font-semibold btn bg-white border-none shadow-white">
                Menu
              </li>
              <li className="text-lg font-semibold btn bg-white border-none shadow-white">
                Services
              </li>
              <li className="text-lg font-semibold btn bg-white border-none shadow-white">
                Blog
              </li>
              <li className="text-lg font-semibold btn bg-white border-none shadow-white">
                Contact
              </li>
            </ul>
          </div>
          <img className="w-[100px] cursor-pointer" src="./public/logo.png" alt="logo"></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 ">
            <li className="text-lg font-semibold btn bg-white border-none shadow-white">
              Menu
            </li>
            <li className="text-lg font-semibold btn bg-white border-none shadow-white">
              Services
            </li>
            <li className="text-lg font-semibold btn bg-white border-none shadow-white">
              Blog
            </li>
            <li className="text-lg font-semibold btn bg-white border-none shadow-white">
              Contact
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-none style-btn">Sing Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
