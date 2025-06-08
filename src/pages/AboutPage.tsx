export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <section className="flex flex-col items-center gap-8 px-4 py-12 max-w-3xl mx-auto">
                {/* header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">
                        about <span className="italic">tyFont</span>
                    </h1>
                    <p className="text-lg sm:text-xl opacity-75 leading-relaxed">
                        transform your text into fancy unicode fonts and decorative styles
                    </p>
                </div>

                {/* main content */}
                <div className="w-full space-y-6">
                    <div className="border border-white rounded-lg p-6 sm:p-8 text-center">
                        <p className="text-base sm:text-lg leading-relaxed mb-4">
                            type your text, pick a style, click to copy. that's it.
                        </p>
                        <p className="text-sm opacity-75">
                            works entirely in your browser • no registration • completely free
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-white rounded-lg p-4 sm:p-6">
                            <h3 className="text-lg font-bold mb-3">what you get</h3>
                            <ul className="space-y-1 text-sm">
                                <li>• 25+ unicode fonts</li>
                                <li>• 30+ decorative borders</li>
                                <li>• one-click copying</li>
                                <li>• real-time preview</li>
                                <li>• mobile friendly</li>
                            </ul>
                        </div>

                        <div className="border border-white rounded-lg p-4 sm:p-6">
                            <h3 className="text-lg font-bold mb-3">great for</h3>
                            <ul className="space-y-1 text-sm">
                                <li>• social media</li>
                                <li>• discord messages</li>
                                <li>• instagram bios</li>
                                <li>• design projects</li>
                                <li>• presentations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="text-center space-y-3 mt-8">
                    <p className="text-xs opacity-60">
                        built with react & typescript • open source • no tracking
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                        <span className="border border-white/50 rounded px-2 py-1 opacity-75">privacy first</span>
                        <span className="border border-white/50 rounded px-2 py-1 opacity-75">no ads</span>
                        <span className="border border-white/50 rounded px-2 py-1 opacity-75">works offline</span>
                    </div>
                </div>
            </section>
        </main>
    );
} 