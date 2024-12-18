import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Feature from "~/components/Feature";

export const meta: MetaFunction = () => {
  return [
    { title: "Messant - Secure Messaging App Made in India" },
    { name: "description", content: "Messant - Made in India messaging app with end-to-end encryption, voice calling, and real-time messaging. Stay connected securely and privately." },
    { name: "keywords", content: "Messant, messaging app, India, end-to-end encryption, voice calling, real-time messaging, secure chat app" },
    { name: "author", content: "Messant Technologies" },

    // Open Graph (OG) Tags for Social Media
    { property: "og:title", content: "Messant - Secure Messaging App Made in India" },
    { property: "og:description", content: "Messant is a Made-in-India messaging app offering end-to-end encryption, secure voice calling, and real-time messaging. Stay connected, privately." },
    { property: "og:image", content: "https://www.messant.in/images/brand-logo.png" },
    { property: "og:url", content: "https://www.messant.in" },
    { property: "og:type", content: "website" },

    // Twitter Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Messant - Secure Messaging App Made in India" },
    { name: "twitter:description", content: "End-to-end encrypted messaging app with voice calling and real-time chat, made in India. Experience secure and private communication with Messant." },
    { name: "twitter:image", content: "https://www.messant.in/images/brand-logo.png" },
    { name: "twitter:site", content: "@MessantApp" },
    { name: "twitter:creator", content: "@MessantApp" }
  ];
};



const features: { title: string, image: string, description: string }[] = [
  {
    title: "End-to-End Encryption",
    description: "Your messages stay private and secure, accessible only to you and the recipient.",
    image: "/images/enc.png"
  },
  {
    title: "Real-Time Messaging",
    description: "Experience lightning-fast messaging with instant delivery and read receipts.",
    image: "/images/message.png"
  },
  {
    title: "Crystal-Clear Voice Calls",
    description: "Connect with friends and family through high-quality, encrypted voice calls.",
    image: "/images/call.png"
  },
  {
    title: "Simple, Easy, and Secure",
    description: "Designed for everyone, Messant offers a clean interface that's easy to use and ensures your privacy.",
    image: "/images/easy.png"
  },
  {
    title: "Username-Based Accounts",
    description: "No phone number or email required. Simply create a username to get started.",
    image: "/images/username.png"
  },
  {
    title: "Message Deletion",
    description: "Delete your messages anytime, and they will be removed for everyone.",
    image: "/images/delete.png"
  },
  {
    title: "Screenshot Protection",
    description: "Screenshots of messages and media are blocked to ensure complete privacy.",
    image: "/images/screenshot.png"
  },
  {
    title: "Media Sharing Security",
    description: "Shared media files can NOT be downloaded or shared outside the app, ensuring your content stays private.",
    image: "/images/media.png"
  }
];


export default function Index() {
  return (
    <>
      <div className="bg-[#00D188] min-h-screen flex items-center justify-center p-5">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Messant - Secure Messaging Made in India</h1>

            <p className="py-4 text-lg">Communicate privately with end-to-end encryption, crystal-clear voice calls, and real-time messaging. Proudly developed in India, for the world.</p>

            <Link className="btn bg-white text-black px-6 text-lg" to={"https://play.google.com/store/apps/details?id=in.messant&hl=en_IN"}>
              Download
            </Link>
          </div>

          {/* Right Images */}
          <div className="flex justify-center relative">
            <img
              src="/images/phone1.png"
              alt="Phone 1"
              className="w-52 md:w-72 lg:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} image={feature.image} description={feature.description} />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2">
            <img width={500} height={500} className="w-full h-auto rounded-lg shadow-lg" src="/images/tracker.png" alt="No trackers" loading="lazy" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">No trackers. No Personal Information.</h2>
              <p className="text-gray-600">Your privacy matters to us. This app does not track any of your activities or collect personal data. We believe in providing a secure and private experience without compromising your freedom. Rest assured, your information stays with you—completely private and secure.</p>
            </div>
            <div>
              <Link className="btn btn-warning px-6 text-lg" to={"https://play.google.com/store/apps/details?id=in.messant&hl=en_IN"}>
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-6 order-2 md:order-none">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">Free for Everyone</h2>
              <p className="text-gray-600">Messant is proud to remain independent and free from ties to any major tech companies. Our mission is to stay focused on the community, not on corporate interests. We are committed to never being acquired, ensuring our users always come first. Our development is supported by generous grants and donations from people like you, alongside our dedicated sponsors. This allows us to continue improving and providing the best possible experience, free from external pressures.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 md:order-none">
            <img width={500} height={500} className="w-full h-auto rounded-lg shadow-lg" src="/images/earth.png" alt="Free for Everyone" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}
