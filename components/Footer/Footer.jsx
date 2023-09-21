import NavBar from '../NavBar/NavBar';

export function Footer() {
    const links = [
        { url: 'https://www.google.com/', label: 'Google' },
        { url: 'https://www.youtube.com/', label: 'YouTube' },
        { url: 'https://www.amazon.com/', label: 'Amazon' },
        { url: 'https://www.ebay.com/', label: 'eBay' },
    ];

    return (
        <div className="footer">
            <NavBar links={links} />
        </div>
    );
}

export default Footer;
