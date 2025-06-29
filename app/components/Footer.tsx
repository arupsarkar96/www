import { Link } from "@remix-run/react";


export default function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="#" className="link link-hover">Branding</Link>
                    <Link to="#" className="link link-hover">Design</Link>
                    <Link to="#" className="link link-hover">Marketing</Link>
                    <Link to="#" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="#" className="link link-hover">About us</Link>
                    <Link to="#" className="link link-hover">Contact</Link>
                    <Link to="#" className="link link-hover">Jobs</Link>
                    <Link to="#" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/terms" className="link link-hover">Terms of use</Link>
                    <Link to="/privacy" className="link link-hover">Privacy policy</Link>
                </div>
            </footer>

            <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 py-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} MESEZ.ME — Built with 💙 in India. All rights reserved.</p>
            </footer>
        </>
    );
}
