export default function Header() {
    return (
        <header id="siteHeader" className="w-full px-6 text-sm md:px-8 xl:px-0 bg-blue-700 shadow-md">
            <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-4 xl:h-[88px] xl:justify-start">
                <a aria-label="Home" className="focus:outline-2 focus:outline-xe-primary-500" href="/">
                    <p className="text-lg font-bold text-white">Currency Converter</p>
                </a>
            </div>
        </header>
    );
}
