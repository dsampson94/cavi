import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Map from './map';

function NavbarLeft({ contactScrollToRef, brandsScrollToRef, businessScrollToRef, peopleScrollToRef, showMenu, setShowMenu }) {

    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showStickyNavbar, setShowStickyNavbar] = useState(false);
    const [showUpperMenu, setShowUpperMenu] = useState(null);

    const navbarRef = useRef(null);

    const dropDownAboutOptions = [
        { name: 'Brands', onClick: () => handleBrandsClick() },
        { name: 'Business', onClick: () => handleBusinessClick() },
        { name: 'People', onClick: () => handlePeopleClick() },
        { name: 'Corporate Social Responsibility', onClick: () => handleCSRClick() }
    ];

    const dropDownCareersOptions = [
        { name: 'Dermalogica', link: 'https://www.dermalogica.co.za/careers' },
        { name: 'PCG', link: 'https://pcg.co.za/careers/' },
        { name: 'Chanel', link: 'https://pcg.co.za/careers/' },
        { name: 'PDS', link: 'https://pcg.co.za/careers/' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setScrollDirection('down');
                setShowStickyNavbar(false);
            } else {
                setScrollDirection('up');
                if (currentScrollTop === 0) {
                    setShowStickyNavbar(false);
                } else {
                    setShowStickyNavbar(true);
                }
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const handleContactUsClick = () => {
        setShowMenu(1);
        const scrollToOptions = {
            top: contactScrollToRef.current.offsetTop,
            behavior: 'smooth'
        };

        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollToOptions);
        } else {
            window.scrollTo(scrollToOptions.top, 0);
        }
    };

    const handleCSRClick = () => {
        const scrollToOptions = {
            top: contactScrollToRef.current.offsetTop,
            behavior: 'smooth'
        };

        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollToOptions);
        } else {
            window.scrollTo(scrollToOptions.top, 0);
        }
    };

    const handleBusinessClick = () => {
        const scrollToOptions = {
            top: businessScrollToRef.current.offsetTop,
            behavior: 'smooth'
        };

        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollToOptions);
        } else {
            window.scrollTo(scrollToOptions.top, 0);
        }
    };

    const handleBrandsClick = () => {
        const scrollToOptions = {
            top: brandsScrollToRef.current.offsetTop,
            behavior: 'smooth'
        };

        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollToOptions);
        } else {
            window.scrollTo(scrollToOptions.top, 0);
        }
    };

    const handlePeopleClick = () => {
        const scrollToOptions = {
            top: peopleScrollToRef.current.offsetTop,
            behavior: 'smooth'
        };

        // Check if the 'scrollTo' method is supported
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollToOptions);
        } else {
            // Fallback for older browsers/devices
            window.scrollTo(scrollToOptions.top, 0);
        }
    };


    const toggleMenu = (index) => {
        if (showUpperMenu === index) setShowUpperMenu(null);
        else setShowUpperMenu(index);
    };

    return (
        <>
            <header
                className={ `top-0 z-50 shadow-xl br-04 rounded-2xl whitespace-nowrap
                ${ showStickyNavbar || lastScrollTop === 0 ? 'sticky top-0' : '' } transition-colors duration-200` }
                ref={ navbarRef }
                style={ {
                    opacity: 1,
                    transition: 'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out'
                } }
            >
                <Popover className={ `${ !showStickyNavbar || lastScrollTop === 0 ? 'bg-transparent absolute w-full' : 'bg-white' } transition-colors duration-200` }>
                    <nav className="flex max-w-8xl items-center justify-between pb-8 px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start min-w-fit lg:w-0 lg:flex-1 min-w-32 min-h-[90px] max-h-[70px] h-[70px]">
                            <Image src={ !showStickyNavbar || lastScrollTop === 0 ? '/footer-logo.webp' : '/cavilogo.svg' }
                                   alt={ 'cavi logo' }
                                   height={ 200 }
                                   width={ 200 }
                                   className="object-cover object-center translate-y-4"
                                   layout="fixed" />
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button
                                className={ `inline-flex items-center justify-center mt-10 rounded-md p-2 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300 bg-transparent' :
                                    'text-gray-500 bg-white' } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500` }>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group className="hidden lg:flex lg:gap-x-12 mt-10">
                            <Popover className="relative">
                                <Popover.Button
                                    className={ `flex items-center gap-x-1 text-lg leading-6 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : 'text-gray-800' } outline-none` }>
                                    About
                                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={ Fragment }
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel
                                        className={ `absolute -left-4 z-10 mt-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5 mt-2 
              ${ !showStickyNavbar || lastScrollTop === 0 ? 'bg-black' : 'bg-white' }` }>
                                        <div className="p-3">
                                            { dropDownAboutOptions.map((item) => (
                                                <div
                                                    key={ item.name }
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-blue-500 cursor-pointer"
                                                >
                                                    <div className="flex-auto">
                                                        <a onClick={ item.onClick }
                                                           className={ `block ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : 'text-gray-900' }` }>
                                                            { item.name }
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>

                            <Popover className="relative">
                                <Popover.Button
                                    className={ `flex items-center gap-x-1 text-lg leading-6 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : 'text-gray-800' } outline-none` }>
                                    Careers
                                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={ Fragment }
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel
                                        className={ `absolute -left-4 z-10 mt-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5 mt-2 
              ${ !showStickyNavbar || lastScrollTop === 0 ? 'bg-black' : 'bg-white' }` }>
                                        <div className="p-3">
                                            { dropDownCareersOptions.map((item) => (
                                                <div
                                                    key={ item.name }
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-blue-500 cursor-pointer"
                                                >
                                                    <div className="flex-auto">
                                                        <a href={ item.link }
                                                           className={ `block ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : 'text-gray-900' }` }>
                                                            { item.name }
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>

                            <a onClick={ () => handleContactUsClick() }
                               className={ `text-lg leading-6 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : 'text-gray-800' } cursor-pointer` }>
                                Contact
                            </a>
                        </Popover.Group>
                    </nav>

                    <Transition
                        as={ Fragment }
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        appear={ true }
                    >
                        <Popover.Panel
                            focus
                            className={ `fixed inset-0 z-30 overflow-y-auto rounded-xl ` }
                        >
                            <div className={ `${
                                !showStickyNavbar || lastScrollTop === 0 ? 'bg-white' : 'bg-white'
                            } rounded-lg shadow-lg ring-1 ring-black ring-opacity-5` }>
                                <div className="px-5 pt-2 pb-6">
                                    <div className="flex items-center justify-between">
                                        <Image
                                            src={ '/cavilogo.svg' }
                                            alt="cavi logo"
                                            height={ 200 }
                                            width={ 200 }
                                            className="object-cover object-center mr-1"
                                            layout="fixed"
                                        />
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className={ `inline-flex mt-3 mr-1 items-center justify-center rounded-md bg-${ !showStickyNavbar || lastScrollTop === 0 ? 'white' : 'white' } p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
                                                    !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : ''
                                                }` }
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 p-4 ml-12 -mt-6">
                                    <Popover className="relative">
                                        <Popover.Button
                                            className={ `flex items-center gap-x-1 text-lg leading-6 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-800' : 'text-gray-800' } outline-none` }>
                                            About
                                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                        </Popover.Button>

                                        <Transition
                                            as={ Fragment }
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className={ `absolute -left-4 z-10 mt-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5 mt-2 
              ${ !showStickyNavbar || lastScrollTop === 0 ? 'bg-white' : 'bg-white' }` }>
                                                <div className="p-3">
                                                    { dropDownAboutOptions.map((item) => (
                                                        <div
                                                            key={ item.name }
                                                            className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-blue-500 cursor-pointer"
                                                        >
                                                            <div className="flex-auto">
                                                                <a onClick={ item.onClick }
                                                                   className={ `block ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-800' : 'text-gray-900' }` }>
                                                                    { item.name }
                                                                    <span className="absolute inset-0" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )) }
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </Popover>

                                    <Popover className="relative">
                                        <Popover.Button
                                            className={ `flex items-center gap-x-1 text-lg leading-6 ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-800' : 'text-gray-800' } outline-none` }>
                                            Careers
                                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                        </Popover.Button>

                                        <Transition
                                            as={ Fragment }
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className={ `absolute -left-4 z-10 mt-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5 mt-2 
              ${ !showStickyNavbar || lastScrollTop === 0 ? 'bg-white' : 'bg-white' }` }>
                                                <div className="p-3">
                                                    { dropDownCareersOptions.map((item) => (
                                                        <div
                                                            key={ item.name }
                                                            className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-blue-500 cursor-pointer"
                                                        >
                                                            <div className="flex-auto">
                                                                <a href={ item.link }
                                                                   className={ `block ${ !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-900' : 'text-gray-900' }` }>
                                                                    { item.name }
                                                                    <span className="absolute inset-0" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )) }
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </Popover>
                                </div>
                                <div className="relative flex justify-between px-3 py-2">
                                    <div className="relative flex space-x-2">
                                        { contacts.map((item, index) => (
                                            <div key={ item.name }>
                                                <button
                                                    onClick={ () => toggleMenu(index) }
                                                    className={ `text-gray-400 hover:text-gray-500 ${
                                                        showUpperMenu === index ? 'text-gray-500' : ''
                                                    }` }
                                                >
                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                                { showUpperMenu === index && (
                                                    <div className="absolute top-full left-0">
                                                        { item.menu }
                                                    </div>
                                                ) }
                                            </div>
                                        )) }
                                    </div>
                                    <div className="flex space-x-2">
                                        { socials.map((item) => (
                                            <a
                                                key={ item.name }
                                                href={ item.href }
                                                className={ `text-gray-400 hover:text-gray-500 ${
                                                    !showStickyNavbar || lastScrollTop === 0 ? 'text-gray-300' : ''
                                                }` }
                                            >
                                                <span className="sr-only">{ item.name }</span>
                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                            </a>
                                        )) }
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>

                </Popover>
            </header>
        </>
    );
};

export default NavbarLeft;

export const socials = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/cavibrands/',
        icon: (props) => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-700 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" { ...props }>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        )
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UCnDYwOXD3h0PlrCKKH_nMKg',
        icon: (props) => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-700 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" { ...props }>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        )
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/cavi-brands/?originalSubdomain=za',
        icon: (props) => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-700 text-white">
                <svg fill="currentColor" viewBox="-2 -2 24 24" { ...props }>
                    <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        )
    }
];

const MapsMenu = () => (
    <div className="absolute top-full mt-4 w-[390px] md:w-[500px] bg-white rounded-xl shadow-2xl mb-14 -translate-x-2 overflow-hidden">

        <div className="flex-row pt-4">

            <h2 className="text-lg font-bold text-gray-500 ml-11 sm:text-2xl sm:tracking-tight">JOHANNESBURG CAVI CAMPUS</h2>
            <div className="ml-3 text-base flex text-gray-500">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=CAVI Brands+Oakhurst Building, 11-13 Saint Andrew Road, Parktown, Johannesburg, 2193"
                           target="_blank" className="text-xs font-bold whitespace-normal break-words">11-13 St Andrews Road, Parktown, 2193, Johannesburg, Gauteng,
                            South Africa</a><br />
                    </div>
                </div>
            </div>

            <Map lat={ -26.18239629277934 }
                 lon={ 28.03498248465847 }
                 location={ 'JHB' } />
        </div>

        <div className="flex-row">

            <h2 className="text-xl font-bold text-gray-500 ml-11 sm:text-2xl sm:tracking-tight">CAPE TOWN CAVI CAMPUS</h2>
            <div className="ml-3 text-base flex text-gray-500">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <MapPinIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=Black River Park+2 Fir St, Observatory, Cape Town, 7925"
                           target="_blank" className="text-xs font-bold whitespace-normal break-words">Unit 2D, Black River Park North,
                            Fir Street, Observatory, 7925,
                            Cape Town, Western Cape,
                            South Africa</a>
                    </div>
                </div>
            </div>

            <Map lat={ -33.93434753748154 }
                 lon={ 18.471861071164618 }
                 location={ 'CPT' } />
        </div>
    </div>
);

const ContactMenu = () => (
    <div className="absolute top-full mt-4 w-[390px] md:w-[500px] bg-white pr-4 rounded-xl shadow-2xl mb-14 -translate-x-2 overflow-hidden">

        <div className="flex-row p-4">

            <h2 className="text-lg font-bold text-gray-500 ml-10 sm:text-2xl sm:tracking-tight">JOHANNESBURG CAVI CAMPUS</h2>
            <div className="flex">
                <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400 -mt-6" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                    <a href="tel:+27(0)113414900"
                       className="font-bold text-md underline"
                    >+27 (0)11 341 4900</a>
                </div>
            </div>
        </div>

        <div className="flex-row p-4">

            <h2 className="text-lg font-bold text-gray-500 ml-10 sm:text-2xl sm:tracking-tight">CAPE TOWN CAVI CAMPUS</h2>
            <div className="flex">
                <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400 -mt-6" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                    <a href="tel:+270(21)4427700"
                       className="font-bold text-md underline"
                    >+27 0(21) 442 7700</a>
                </div>
            </div>
        </div>
    </div>
);

const MailMenu = () => (
    <div className="absolute top-full mt-4 p-4 w-[390px] md:w-[500px] bg-white pr-4 rounded-xl shadow-2xl -translate-x-2 mb-14 overflow-hidden">

        <h2 className="text-lg font-bold text-gray-500 ml-10 sm:text-2xl sm:tracking-tight">CAVI Email</h2>
        <div className="flex">
            <div className="flex-shrink-0">
                <EnvelopeIcon className="h-6 w-6 text-gray-400 -mt-6" aria-hidden="true" />
            </div>
            <div className="ml-4 text-base text-gray-500">
                <a className="font-bold underline" href="mailto:info@cavibrands.co.za?subject=CAVI%20Web%20Mail">
                    info@cavibrands.co.za
                </a>
            </div>
        </div>
    </div>
);

const contacts = [
    {
        name: 'Mail',
        href: 'https://www.linkedin.com/company/cavi-brands/?originalSubdomain=za',
        menu: <MapsMenu />,
        icon: () => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z" />
                </svg>
            </div>
        )
    },
    {
        name: 'Contact',
        href: 'https://www.youtube.com/channel/UCnDYwOXD3h0PlrCKKH_nMKg',
        menu: <ContactMenu />,
        icon: () => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M795-120q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.286 12.857-32.143T165-840h140q13.611 0 24.306 9.5Q340-821 343-805l27 126q2 14-.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840-316 840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
                </svg>
            </div>
        )
    },
    {
        name: 'Map',
        href: 'https://www.instagram.com/cavibrands/',
        menu: <MailMenu />,
        icon: () => (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                </svg>
            </div>
        )
    }
];


const navigation = [
    { name: 'About', href: '/about' },
    { name: 'People', href: '/people' },
    { name: 'Businesses', href: '/businesses' },
    { name: 'Our Brands', href: '/brands' },
    { name: 'CSR', href: '/csr' },
    { name: 'Careers', href: '/careers' }
];
