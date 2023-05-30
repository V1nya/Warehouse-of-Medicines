import React, {useState} from 'react';

const Header = () => {

    return (
        <header>
            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg focus:text-neutral-700 md:flex-wrap md:justify-start">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex items-center">
                        <button
                            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out lg:hidden"
                            type="button"
                            data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        </button>
                    </div>
                    <div
                        className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY">
                        <ul
                             className="mr-auto flex flex-col lg:flex-row">
                            <li className="mb-4 lg:mb-0 lg:pr-2">
                                <a
                                    href={"/"}
                                    className="block transition duration-150 ease-in-out hover:text-neutral-800 lg:p-2"
                                    data-te-ripple-color="light"
                                >Main
                                </a>
                            </li>
                            {/*<li className="mb-4 lg:mb-0 lg:pr-2">*/}
                            {/*    <a*/}
                            {/*        className="block transition duration-150 ease-in-out hover:text-neutral-800 lg:p-2"*/}
                            {/*        href="/addWarrior"*/}
                            {/*        data-te-ripple-color="light"*/}
                            {/*        onClick={()=>{*/}

                            {/*        }}*/}
                            {/*    >Add warrior</a>*/}
                            {/*</li>*/}
                            {/*<li className="mb-4 lg:mb-0 lg:pr-2">*/}
                            {/*    <button*/}
                            {/*        className="block transition duration-150 ease-in-out hover:text-neutral-800 lg:p-2"*/}
                            {/*        data-te-ripple-color="light"*/}
                            {/*    >Add car*/}
                            {/*    </button>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;