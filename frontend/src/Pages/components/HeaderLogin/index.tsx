import React from 'react'
import Logo from '../../../assets/GeekhubLogin-logo.svg'
function HeaderLogin() {

    return (
        <header className="bg-custom-green text-white py-2 z-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2 sm:w-1/6 text-1xl"><img src={Logo} alt="" className="w-22 h-22 ml-12" /></div>
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

export default HeaderLogin