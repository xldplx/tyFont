interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`bg-black text-white py-6 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm opacity-75">
                    © {new Date().getFullYear()} tyFont. all rights reserved.
                </div>
                
                <div className="flex items-center gap-4">
                    <a 
                        href="https://github.com/xldplx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition-all tracking-wide"
                    >
                        github.com/xldplx
                    </a>
                </div>
            </div>
        </footer>
    );
} 