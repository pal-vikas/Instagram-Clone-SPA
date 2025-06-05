import { Link } from "react-router-dom";
import Requests from "../pages/Requests";

function Navbar()
{
    return(
        <>
            <div className=" p-4 border-b border-neutral-200 mt-2">
                <div className="w-[900px] mx-auto flex items-center justify-between ">
                  {/* <a className="text-3xl font-semibold" href="">Instagram</a> */}
                  <Link to={'/requests' } className="text-3xl font-semibold">Instagram</Link>
                    <div className="flex gap-3 text-xl font-medium">
                        {/* <a href="/requests">Requests</a> */}
                        <Link to={'/requests' }>Requests</Link>
                        {/* <a href="/about">About Us</a> */}
                        <Link to={'about'}>About Us</Link>
                        {/* <a href="/randomLink">Random links</a> */}
                        <Link to={'randomLink'}>Random links</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;