interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
    const navItems = [
        { id: 'fancyText', label: 'fonts' },
        { id: 'styles', label: 'styles' },
        { id: 'about', label: 'about' }
    ];

    return (
        <header className="w-full bg-black text-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex items-center">
                        <h1 className="text-xl sm:text-2xl font-bold tracking-wider">tyFont</h1>
                    </div>

                    {/* navigation */}
                    <nav>
                        <ul className="flex gap-1 sm:gap-4">    
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setCurrentPage(item.id)}
                                        className={`relative px-3 py-2 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 rounded-md ${
                                            currentPage === item.id 
                                                ? 'bg-white text-black' 
                                                : 'hover:bg-white hover:text-black'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}