import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <div className="navbar bg-[#00D188] sticky top-0 z-10">
            {/* Left side - Brand */}
            <div className="flex-1">
                <Link to="/" className="normal-case text-xl font-bold text-base-content flex items-center">
                    <img src="/images/logo.svg" alt="logo" className="size-12 me-4 text-black" />
                    Messant
                </Link>
            </div>

            {/* Right side - Links */}
            <div className="flex-none">
                {/* Dropdown for mobile */}
                <div className="dropdown dropdown-end lg:hidden">
                    <button className="btn btn-ghost lg:hidden" aria-label="Menu">
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
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 text-base-content rounded-box w-52">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms">Terms</Link>
                        </li>
                    </ul>
                </div>

                {/* Horizontal menu for larger screens */}
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
