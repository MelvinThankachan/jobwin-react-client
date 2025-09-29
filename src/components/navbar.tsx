import ThemeToggleButton from "./theme-toggle-button";

const NavBar = () => {
  return (
    <nav className="bg-base-300">
      <div className="container mx-auto">
        <div className="navbar px-10 py-5">
          <div className="flex-1">
            <span className="text-2xl font-bold">
              <span className="text-primary">Job</span>
              <span>Win</span>
            </span>
          </div>
          <div className="navbar-end">
            <ThemeToggleButton />
            <div className="flex-none">
              <ul className="menu menu-horizontal px-10 font-bold flex gap-10">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <details>
                    <summary>About</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Contact</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            {/* <div className="divider divider-horizontal "></div> */}
            <div className="flex gap-10">
              <a className="btn btn-ghost">Login</a>
              <a className="btn btn-primary px-10">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
