import Link from 'next/link';

export default function Navbar(){
    return(
        <header className='from-gray-900 to-black text-white w-full p-4 border-2 border-gray-900'>
        <nav>
        <ul className='flex space-x-6 justify-center'>
            <li>
                <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/about" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                    About Me
                </Link>
            </li>
            <li>
                <Link href="/resume" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                    Resume
                </Link>
            </li>
            <li>
                <Link href="/contact" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                    Contact Me
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}