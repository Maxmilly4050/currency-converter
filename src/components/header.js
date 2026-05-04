
function Header() {
    return (
        <header id="siteHeader" className="w-full px-6 text-sm md:px-8 xl:px-0 bg-gradient-to-l from-blue-850 to-blue-700">
            <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-4 xl:h-[88px] xl:justify-start">
                <a aria-label="Home" className="focus:outline-2 focus:outline-xe-primary-500" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 710 568.71" aria-label="Xe" className="w-[50px] text-white">
                    <path fill="currentColor" d="M270.72 427.89h-79.85a2.9 2.9 0 01-2.46-1.37l-51.6-83.33-51.62 83.33a2.87 2.87 0 01-2.45 1.37H2.9a2.89 2.89 0 01-2.4-4.51L96.36 280.9 1.68 143.35a2.89 2.89 0 012.38-4.53h80.33a2.88 2.88 0 012.44 1.36l50 79.51 49.67-79a3.88 3.88 0 013.3-1.83h79.77a2.89 2.89 0 012.38 4.53L177.24 280.9l95.88 142.48a2.9 2。9 0 01-2.4 4。51zM424。65。01a282。59 282。59 0 00-208 90。9 1。47 2。9 2。9 0 01-4。1-4。1 287。57 287。57 0 01212。8-92。7c79。5 0 150。3 30。9 205。6 86.2a2。9 2。9 0 11-4.1 4.1A282。59 282。59 0 00424.65.01z"/>
                    </svg>
                </a>
                    <nav className="hidden gap-6 xl:flex">
                        <a className="focus:outline-2 focus:outline-xe-primary-500 text-white" href="/currency-converter">Currency Converter</a>
                        <a className="focus:outline-2 focus:outline-xe-primary-500 text-white" href="/currency-data">Currency Data</a>
                        <a className="focus:outline-2 focus:outline-xe-primary-500 text-white" href="/currency-news">Currency News</a>
                    </nav>
            </div>
        </header>
    );
}