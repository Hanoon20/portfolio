

import './Footer.css';

export default function Footer(){
    return(
        <footer className="bg-gray-600 text-center text-white py-4">
            <div className="container mx-auto">
                <p className="text-sm">
                &copy; {new Date().getFullYear()} Hanoon. All Rights Reserved.
                </p>
                <p className="text-xs">
                Built with <span className="text-yellow-500">React.js</span> and <span className="text-yellow-500">Tailwind CSS</span>.
                </p>
            </div>
            </footer>
    )
}