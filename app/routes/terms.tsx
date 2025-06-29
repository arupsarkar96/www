import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Terms of Use" },
        { name: "description", content: "MesezMe - Made in India messaging app with end-to-end encryption, voice calling, and real-time messaging. Stay connected securely and privately." },
        { name: "keywords", content: "MesezMe, messaging app, India, end-to-end encryption, voice calling, real-time messaging, secure chat app" },
        { name: "author", content: "MesezMe Technologies" }
    ];
};


const TermsOfUse = () => {
    return (

        <>
            <div className="container mx-auto p-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="terms-of-use">

                        <h1 className="font-bold text-2xl">Terms of Use</h1>
                        <p className="mt-4"><strong>Effective Date:</strong> [19<sup>th</sup> December 2024]</p>
                        <div className="divider"></div>

                        <p>
                            Welcome to MesezMe! By accessing or using our services, you agree to be bound by these Terms of Use. Please read them carefully before using the app.
                        </p>

                        <h2 className="font-bold text-2xl py-4">1. Acceptance of Terms</h2>
                        <p>
                            By creating an account or using MesezMe, you accept and agree to these Terms of Use. If you do not agree, you must discontinue use of our services immediately.
                        </p>

                        <h2 className="font-bold text-2xl py-4">2. Eligibility</h2>
                        <p>
                            You must be at least 13 years old to use MesezMe. By using the service, you confirm that you meet this age requirement.
                        </p>

                        <h2 className="font-bold text-2xl py-4">3. Account Responsibilities</h2>
                        <ul className="ms-8">
                            <li>i. You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li>ii. You agree to provide accurate and up-to-date information during account registration.</li>
                            <li>iii. You must notify us immediately of any unauthorized use of your account.</li>
                        </ul>

                        <h2 className="font-bold text-2xl py-4">4. Prohibited Activities</h2>
                        <p>When using MesezMe, you agree not to:</p>
                        <ul className="ms-8">
                            <li>i. Engage in illegal activities or use the app for unlawful purposes.</li>
                            <li>ii. Send spam, phishing messages, or any unauthorized advertisements.</li>
                            <li>iii. Harass, abuse, or harm other users.</li>
                            <li>iv. Interfere with the app&apos;s operation or compromise its security.</li>
                        </ul>

                        <h2 className="font-bold text-2xl py-4">5. Messaging and Data</h2>
                        <p>
                            Messages are encrypted end-to-end. We do not permanently store message data unless the recipient is offline, in which case the encrypted message is temporarily stored until delivery.
                        </p>

                        <h2 className="font-bold text-2xl py-4">6. Intellectual Property</h2>
                        <p>
                            MesezMe and its content, including logos, designs, and software, are the intellectual property of MesezMe. You may not use, copy, or distribute any of our intellectual property without prior written permission.
                        </p>

                        <h2 className="font-bold text-2xl py-4">7. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your account if you violate these Terms of Use or engage in behavior that disrupts our services.
                        </p>

                        <h2 className="font-bold text-2xl py-4">8. Limitation of Liability</h2>
                        <p>
                            MesezMe is provided on an &quot;as is&quot; basis. We are not responsible for any damages, loss of data, or disruptions caused by your use of the app.
                        </p>

                        <h2 className="font-bold text-2xl py-4">9. Modifications to Terms</h2>
                        <p>
                            We may update these Terms of Use periodically. Significant changes will be communicated via the app or website. Continued use of the app constitutes acceptance of the updated terms.
                        </p>

                        <h2 className="font-bold text-2xl py-4">10. Governing Law</h2>
                        <p>
                            These Terms of Use are governed by the laws of India. Any disputes arising from your use of MesezMe will be resolved in the courts of [Insert Jurisdiction].
                        </p>

                        <h2 className="font-bold text-2xl py-4">11. Contact Us</h2>
                        <p>
                            For questions about these Terms of Use, please contact us at:
                        </p>
                        <ul className="ms-8">
                            <li><strong>Email:</strong> support@MesezMe.in</li>
                            <li><strong>Address:</strong> MesezMe, Kolkata, West Bengal, India</li>
                        </ul>

                        <p className="mt-4">
                            Thank you for using MesezMe. We hope you enjoy our secure and reliable messaging services!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsOfUse;
