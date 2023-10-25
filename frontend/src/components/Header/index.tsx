import React from 'react'
import Logo from '../../assets/Geekhub-logo.svg'
function Header() {

    return (
        <header className="bg-transparence text-white py-0 z-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2 sm:w-1/6 text-1xl"><img src={Logo} alt="" className="mt-4 w-22 h-22 ml-12" /></div>
                <nav className="hidden md:block">
                    <div className="flex space-x-4 ">
                        <button className="text-custom-green bg-white px-6 py-1 rounded-xl mr-12">
                            SignUp
                        </button>
                    </div>
                </nav>
                <button className="md:hidden text-white">Menu</button>
            </div>
        </header>
    );

}

export default Header