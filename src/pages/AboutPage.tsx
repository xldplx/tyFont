export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <section className="flex flex-col items-center gap-8 px-4 py-8 max-w-4xl mx-auto">
                {/* header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold tracking-widest">
                        about <span className="italic">tyFont</span>
                    </h1>
                    <p className="text-xl opacity-75 max-w-2xl leading-relaxed">
                        a simple web tool for creating fancy text and decorative styles
                    </p>
                </div>

                {/* main content */}
                <div className="w-full space-y-8">
                    <div className="border-2 border-white rounded-xl p-8 space-y-6 text-center">
                        <h2 className="text-2xl font-bold tracking-wide">what is tyFont?</h2>
                        <div className="space-y-4 text-lg leading-relaxed">
                            <p>
                                tyFont transforms your regular text into stylish Unicode fonts and decorative borders.
                                perfect for social media, design projects, and anywhere you want your text to stand out.
                            </p>
                            <p>
                                all transformations happen in your browser - no registration required, 
                                completely free to use, and your text never leaves your device.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-2 border-white rounded-xl p-6 text-center">
                            <h3 className="text-xl font-bold tracking-wide mb-4">features</h3>
                            <ul className="space-y-2 text-left">
                                <li>• 18+ Unicode font styles</li>
                                <li>• 30+ decorative borders</li>
                                <li>• one-click copying</li>
                                <li>• real-time preview</li>
                                <li>• mobile friendly</li>
                                <li>• completely free</li>
                            </ul>
                        </div>

                        <div className="border-2 border-white rounded-xl p-6 text-center">
                            <h3 className="text-xl font-bold tracking-wide mb-4">perfect for</h3>
                            <ul className="space-y-2 text-left">
                                <li>• social media posts</li>
                                <li>• Instagram bios</li>
                                <li>• discord messages</li>
                                <li>• design projects</li>
                                <li>• presentations</li>
                                <li>• creative writing</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-2 border-white rounded-xl p-6 text-center">
                        <h3 className="text-xl font-bold tracking-wide mb-4">how it works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="space-y-2">
                                <div className="text-lg font-bold">1. type</div>
                                <p className="opacity-75">enter your text in the input field</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">2. choose</div>
                                <p className="opacity-75">pick from fonts or decorative styles</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">3. copy</div>
                                <p className="opacity-75">click any style to copy to clipboard</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="text-center space-y-4 mt-12">
                    <p className="text-sm opacity-75">
                        built with react & typescript • completely open source • no tracking
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs">
                        <span className="border border-white rounded px-3 py-1">privacy first</span>
                        <span className="border border-white rounded px-3 py-1">works offline</span>
                        <span className="border border-white rounded px-3 py-1">no ads</span>
                    </div>
                </div>
            </section>
        </main>
    );
} 