import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer flex p-20 justify-between bg-[#151515] text-[#F3F3F3]">
            <div className='w-1/4'>
                <img className='w-[30%]' src={logo} alt="" />
                <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title 'text-white'">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why Car Doctor?</a>
                <a className="link link-hover">About</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accessibility</a>
            </div>
        </footer>
    );
};

export default Footer;