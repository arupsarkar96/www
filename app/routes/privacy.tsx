import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy" },
        { name: "description", content: "MesezMe - Made in India messaging app with end-to-end encryption, voice calling, and real-time messaging. Stay connected securely and privately." },
        { name: "keywords", content: "MesezMe, messaging app, India, end-to-end encryption, voice calling, real-time messaging, secure chat app" },
        { name: "author", content: "MesezMe Technologies" }
    ];
};

export default function Privacy() {
    return (
        <>
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-bold text-2xl">MesezMe Privacy Policy</h1>
                    <p className="mt-4"><strong>Effective Date:</strong> [29<sup>th</sup> June 2025]</p>
                    <div className="divider"></div>
                    <p>
                        MesezMe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your data remains secure.
                    </p>

                    <h2 className="font-bold text-2xl py-4">1. Information We Collect</h2>
                    <p>We collect only the data necessary to provide and improve our services. This includes:</p>

                    <h3 className="font-semibold text-xl py-2">A. Personal Information</h3>
                    <ul className="ms-8">
                        <li><strong>Name:</strong> Collected during account creation to identify the user.</li>
                        <li><strong>Username:</strong> Collected during account creation to identify the user.</li>
                        <li><strong>Photo:</strong> Optional, used for account management and to personalize the user profile.</li>
                    </ul>

                    <h3 className="font-semibold text-xl py-2">B. Security and Performance Data</h3>
                    <ul className="ms-8">
                        <li><strong>IP Address:</strong> Stored for security purposes, fraud prevention.</li>
                        <li><strong>Network Location:</strong> Used to enhance security and improve profile suggestions.</li>
                    </ul>

                    <h3 className="font-semibold text-xl py-2">C. Messaging Data</h3>
                    <ul className="ms-8">
                        <li><strong>Message Content:</strong> We do not store message data permanently. Messages are end-to-end encrypted and inaccessible to us. If the recipient is offline, we temporarily store the encrypted message. Once the recipient comes online, the message is delivered and immediately deleted from our servers.</li>
                        <li><strong>Encryption:</strong> All messages are secured using the Signal Protocol — an industry-standard cryptographic protocol that ensures forward secrecy, authentication, and deniability.</li>
                    </ul>

                    <h3 className="font-semibold text-xl py-2">D. Device Information</h3>
                    <ul className="ms-8">
                        <li><strong>Device Token:</strong> Stored to enable push notifications and ensure message delivery.</li>
                        <li><strong>Public Key:</strong> Stored to facilitate end-to-end encryption and secure communication.</li>
                        <li><strong>No Other Device Information:</strong> We do not store any other device-related data.</li>
                    </ul>

                    <h3 className="font-semibold text-xl py-2">E. Usage Data</h3>
                    <ul className="ms-8">
                        <li>We do not collect anything.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">2. How We Use Your Information</h2>
                    <p>We use the information collected to:</p>
                    <ul className="ms-8">
                        <li>a. Deliver and improve messaging, voice calling, and other features.</li>
                        <li>b. Verify accounts and maintain security.</li>
                        <li>c. Provide technical support and respond to user inquiries.</li>
                        <li>d. Analyze app performance to enhance features.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">3. Data Sharing</h2>
                    <p>MesezMe does not sell or share your personal information with third parties. Your privacy is our top priority, and we have designed every aspect of our service to ensure your data is secure and handled responsibly. Except: </p>
                    <ul className="ms-8">
                        <li><strong>Legal Compliance:</strong> When required by law or to protect against illegal activity.</li>
                        <li><strong>Advertising Disclosure:</strong> We use Google Ads to support the platform. While Google may use cookies or identifiers for ad personalization, MesezMe does not share personal user data with advertisers or ad networks.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">4. Infrastructure</h2>
                    <p>We have built our platform entirely from scratch to maintain full control over your data and security:</p>
                    <ul className="ms-8 mt-2">
                        <li><strong>Physical Servers:</strong> MesezMe operates its own physical servers, ensuring maximum control and security over your data.</li>
                        <li><strong>CDN:</strong> Our own Content Delivery Network ensures secure and fast content delivery.</li>
                        <li><strong>S3:</strong> We use our own storage solution to securely store necessary data.</li>
                        <li><strong>Chat Server:</strong> Proprietary chat servers ensure seamless and secure messaging.</li>
                        <li><strong>Calling Server:</strong> Our custom-built calling server enables secure and reliable voice communication.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">5. Your Rights</h2>
                    <p>As a user, you have the right to:</p>
                    <ul className="ms-8 mt-2">
                        <li><strong>Access Your Data:</strong> Request a copy of the personal data we have collected.</li>
                        <li><strong>Delete Your Data:</strong> Permanently delete your account and associated data.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">6. Security Measures</h2>
                    <p>We implement advanced security measures to protect your data, including:</p>
                    <ul className="ms-8 mt-2">
                        <li><strong>End-to-End Encryption:</strong> All messages are encrypted using the Signal Protocol and are accessible only to the sender and recipient.</li>
                        <li><strong>Secure Servers:</strong> Data is stored on highly secure servers.</li>
                        <li><strong>Access Controls:</strong> Only authorized personnel can access limited data for troubleshooting.</li>
                    </ul>

                    <h2 className="font-bold text-2xl py-4">7. Cookies and Tracking Technologies</h2>
                    <p>MesezMe does not use tracking technologies to monitor user behavior within the app. Google Ads integration may involve limited cookie usage for advertising purposes. Users can opt out of personalized ads in their device settings.</p>

                    <h2 className="font-bold text-2xl py-4">8. Third-Party Integrations</h2>
                    <p>We avoid third-party integrations that compromise your privacy. When necessary, all third-party services comply with our strict privacy standards.</p>

                    <h2 className="font-bold text-2xl py-4">9. Children's Privacy</h2>
                    <p>MesezMe is not intended for use by children under 13. We do not knowingly collect personal information from children. If discovered, such data will be deleted immediately.</p>

                    <h2 className="font-bold text-2xl py-4">10. Updates to This Policy</h2>
                    <p>We may update this Privacy Policy to reflect changes in our practices. Significant changes will be notified via the app or website.</p>

                    <h2 className="font-bold text-2xl py-4">11. Contact Us</h2>
                    <p>For questions or concerns regarding this Privacy Policy, please contact us at:</p>
                    <ul className="ms-8 mt-4">
                        <li><strong>Email:</strong> support@mesez.me</li>
                        <li><strong>Address:</strong> MesezMe, Kolkata, West Bengal, India</li>
                    </ul>

                    <p className="mt-4">
                        By using MesezMe, you agree to this Privacy Policy. We are committed to maintaining your trust and ensuring your privacy is respected.
                    </p>
                </div>
            </div>
        </>
    );
}
