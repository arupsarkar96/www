import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy" },
        { name: "description", content: "Messant - Made in India messaging app with end-to-end encryption, voice calling, and real-time messaging. Stay connected securely and privately." },
        { name: "keywords", content: "Messant, messaging app, India, end-to-end encryption, voice calling, real-time messaging, secure chat app" },
        { name: "author", content: "Messant Technologies" }
    ];
};



export default function DeletePage() {
    return (
        <>
            <div className="max-w-7xl mx-auto h-screen">
                <div className="flex justify-center items-center p-4">
                    <h1 className="text-2xl font-bold">Delete Account</h1>
                </div>
                <div className="divider"></div>

                <p>You have full control over your account. To delete your Messant account, simply follow these steps:</p>

                <ul className="ms-8">
                    <li>1. Open the app and navigate to Account.</li>
                    <li>2. Go to &quot;MENU&quot;.</li>
                    <li>3. Delete Account</li>
                </ul>

                💡 Important Note:
                Once you initiate the deletion process, it will take up to 90 days to permanently remove all your data from our servers. This delay ensures secure and thorough data removal while giving you time to change your decision if needed.

                Your privacy is our priority.
            </div>
        </>
    )
}
