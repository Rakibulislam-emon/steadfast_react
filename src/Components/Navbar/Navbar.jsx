import  { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-[#0182e6] font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex justify-between flex-wrap items-center gap-5 w-full'>
                <h1 className='text-3xl font-serif text-white'>SteadFast</h1>

                {/* Links visible on large screens */}
                <div className='hidden lg:flex lg:ml-auto gap-8'>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px] '>Home</a>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px]'>Feedback</a>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px]'>Services</a>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px]'>contact</a>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px]'>Feedback</a>
                    <a className='hover:text-black hover:font-bold hover:cursor-pointer text-white  block text-[20px]'>Contact</a>
                </div>

                {/* Toggle button for mobile */}
                <button onClick={handleClick} className='lg:hidden '>
                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                </button>

                {/* Sidebar for Mobile */}
                <ul className={`fixed top-20 left-0 w-full text-center h-full bg-[#2c3e50]  shadow-md transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50 p-6`}>
                    <li className='mb-6'>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[25px]'>Home</a>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-white font-semibold block text-[25px]'>About</a>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-white font-semibold block text-[25px] '>Services</a>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-white font-semibold block text-[25px]'>contact</a>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-white font-semibold block text-[25px]'>Feedback</a>
                    </li>
                    <li className=' py-3'>
                        <a className='hover:text-[#007bff] text-white font-semibold block text-[25px]'>Contact</a>
                    </li>
                    <li className='mt-4'>
                        {/* Toggle button for mobile inside the sidebar */}
                        <button onClick={handleClick} className='fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;