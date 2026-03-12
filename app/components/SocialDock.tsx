export default function SocialDock() {
    const links = [
        { label: "GITHUB", href: "https://github.com/jeongminnnnni" },
        { label: "YOUTUBE", href: "https://www.youtube.com/@jeongminnnnnni" },
        { label: "NOTION", href: "https://www.notion.so/2b561551fdde80bba01ef70538fc2c81?source=copy_link" },
    ];

    return (
        <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8 mix-blend-difference">
            {links.map((link, i) => (
                <div key={link.label} className="flex items-center gap-8">
                    {i > 0 && <div className="w-[1px] h-3 bg-white/20"></div>}
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-light tracking-widest text-white/50 hover:text-white transition-all duration-300 relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            ))}
        </footer>
    );
}
