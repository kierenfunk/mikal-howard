import React, { useState } from 'react';
import MenuIcon from './MenuIcon';
import TopBar from '../components/TopBar';
import NavItems from '../components/NavItems';

const Nav = ({email, phone}) => {
    const [open, setOpen] = useState(false)
    return(
        <React.Fragment>
		    <TopBar {...{email,phone}}/>
            <div className="sticky top-0 z-20">
                <div className="py-2 px-6 bg-white flex justify-between">
                    <div className="flex justify-center items-center">
                        <a href="/"><img className="w-24" src="images/logo.png" alt="Mikal Howard Finance Logo"></img></a>
                    </div>
                    <div className="flex justify-center items-center relative">
                        <div className="md:hidden">
                            <MenuIcon onClick={()=>setOpen(!open)} open={open}/>
                        </div>
                        <div className={`hidden md:block`}>
                            <NavItems {...{email,phone}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${open? 'bg-opacity-75 visible': 'bg-opacity-0 invisible'} fixed top-0 left-0 transition-all duration-700 w-screen h-screen z-0 bg-black md:hidden`}></div>
            <div className={`transform ${open? 'translate-y-0' : '-translate-y-full'} fixed transition-all duration-700 top-0 left-0 w-screen z-10 bg-gray-200 md:hidden z-0 pt-24`}>
                <NavItems {...{email,phone}}/>
            </div>
        </React.Fragment>
    )
}

export default Nav;