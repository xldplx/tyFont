import { useState } from 'react';

export default function StylesPage() {
    const [inputText, setInputText] = useState('');

    // decorative text styles with symbols and borders
    const decorativeStyles = {
        'wave borders': (text: string) => `~"*°•.~"*°• ${text} •°*"~.•°*"~`,
        'star frame': (text: string) => `✧･ﾟ: *✧･ﾟ:* ${text} *:･ﾟ✧*:･ﾟ✧`,
        'diamond border': (text: string) => `◊ ◊ ◊ ${text} ◊ ◊ ◊`,
        'arrow frame': (text: string) => `»»————> ${text} <————««`,
        'flower border': (text: string) => `❀.(*´◡\`)❀ ${text} ❀(´◡\`*).❀`,
        'sparkle frame': (text: string) => `✨ ˚✧₊⁎ ${text} ⁎⁺˳✧༚ ✨`,
        'bullet border': (text: string) => `• ◦ ❖ ◦ • ${text} • ◦ ❖ ◦ •`,
        'heart frame': (text: string) => `♡ ♡ ♡ ${text} ♡ ♡ ♡`,
        'fancy border': (text: string) => `◤ ◥ ◣ ◢ ${text} ◤ ◥ ◣ ◢`,
        'crown style': (text: string) => `👑 ═══ ${text} ═══ 👑`,
        'moon border': (text: string) => `☽ ◯ ☾ ${text} ☽ ◯ ☾`,
        'geometric frame': (text: string) => `▲ ▼ ▲ ${text} ▲ ▼ ▲`,
        'vine border': (text: string) => `🌿 ~*~*~ ${text} ~*~*~ 🌿`,
        'music notes': (text: string) => `♪ ♫ ♪ ${text} ♪ ♫ ♪`,
        'infinity style': (text: string) => `∞ ═══ ${text} ═══ ∞`,
        'wave pattern': (text: string) => `~~~~ ${text} ~~~~`,
        'cross border': (text: string) => `✞ ━━━ ${text} ━━━ ✞`,
        'square frame': (text: string) => `▢ ▣ ▢ ${text} ▢ ▣ ▢`,
        'dot border': (text: string) => `⋯ ⋅ ⋯ ${text} ⋯ ⋅ ⋯`,
        'lightning frame': (text: string) => `⚡ ═══ ${text} ═══ ⚡`,
        'circle border': (text: string) => `○ ● ○ ${text} ○ ● ○`,
        'line art': (text: string) => `┌─── ${text} ───┐`,
        'double line': (text: string) => `╔══ ${text} ══╗`,
        'brackets': (text: string) => `【 ${text} 】`,
        'parentheses': (text: string) => `（ ${text} ）`,
        'curved borders': (text: string) => `╰ ${text} ╯`,
        'minimal dots': (text: string) => `· ${text} ·`,
        'fancy quotes': (text: string) => `❝ ${text} ❞`,
        'simple frame': (text: string) => `[ ${text} ]`,
        'elegant border': (text: string) => `━━ ${text} ━━`
    };

    // copy to clipboard function
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    };

    const displayText = inputText || 'your text here';

    return (
        <main className="bg-black text-white min-h-screen">
            <section className="flex flex-col items-center gap-8 px-4 py-8 max-w-6xl mx-auto">
                {/* header section */}
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-bold tracking-widest">
                        decorative <span className="italic">styles</span>
                    </h1>
                    <p className="text-lg opacity-75 max-w-2xl">
                        add beautiful borders and decorative elements around your text
                    </p>

                    <textarea 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="type your text here..." 
                        className="w-full max-w-2xl h-32 border-2 border-white rounded-xl resize-none p-4 bg-black text-white placeholder-white placeholder-opacity-50 focus:outline-none transition-all"
                    />
                </div>

                {/* decorative styles */}
                <div className="w-full space-y-4">
                    <h2 className="text-2xl font-bold tracking-widest text-center">all decorative styles</h2>

                    {/* scrollable styles container */}
                    <div className="border-2 border-white rounded-xl bg-black max-w-4xl mx-auto">
                        <div className="h-96 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                            {Object.entries(decorativeStyles).map(([styleName, transform]) => {
                                const decoratedText = transform(displayText);
                                return (
                                    <div 
                                        key={styleName}
                                        className="border border-white rounded-lg p-4 hover:bg-white hover:text-black transition-all cursor-pointer group"
                                        onClick={() => copyToClipboard(decoratedText)}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-lg font-semibold tracking-wide">{styleName}</h3>
                                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                click to copy
                                            </span>
                                        </div>
                                        <p className="text-xl break-all leading-relaxed text-center">
                                            {decoratedText}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* scroll indicator */}
                        <div className="text-center py-2 border-t border-white">
                            <span className="text-sm opacity-75">scroll to see more styles</span>
                        </div>
                    </div>

                    <p className="text-center text-sm opacity-75 mt-6">
                        click on any decorative style to copy it to your clipboard
                    </p>
                </div>
            </section>
        </main>
    );
} 