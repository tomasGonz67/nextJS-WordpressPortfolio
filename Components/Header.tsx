import Link from 'next/link';

export default function Navbar(){
    return(
        <header className='from-gray-900 to-black text-white w-full p-4 border-2 border-gray-900 '>
        <nav>
        <ul className='flex space-x-6 justify-center'>
            <li><Link href="/">
                Projects
            </Link>
            </li>
            <li><Link href="/about">
                About Me
            </Link>
            </li>
            <li><Link href="/resume">
                Resume
            </Link>
            </li>
            <li>
            <a href="mailto:tpg3@njit.edu">
                <button>Contact Me</button>
            </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}