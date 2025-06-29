// routes/index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Feature from "~/components/Feature";

export const meta: MetaFunction = () => {
  return [
    { title: "MESEZ.ME - Private Messaging Reinvented" },
    { name: "description", content: "MESEZ.ME offers modern, encrypted, and anonymous messaging. No ads. No tracking. Just pure privacy." },
    { name: "keywords", content: "MESEZ, secure messaging, encrypted chat, private communication, India, WhatsApp alternative, Signal alternative" },
    { name: "author", content: "MESEZ Technologies" },
    { property: "og:title", content: "MESEZ.ME - Private Messaging Reinvented" },
    { property: "og:description", content: "Fast. Secure. Anonymous. The next-gen messaging app made in India, for everyone." },
    { property: "og:image", content: "https://www.mesez.me/images/brand-logo.png" },
    { property: "og:url", content: "https://www.mesez.me" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "MESEZ.ME - Private Messaging Reinvented" },
    { name: "twitter:description", content: "No metadata. No ads. No nonsense. Just private conversations on your terms." },
    { name: "twitter:image", content: "https://www.mesez.me/images/brand-logo.png" },
    { name: "twitter:site", content: "@MesezApp" },
    { name: "twitter:creator", content: "@MesezApp" }
  ];
};

const features = [
  {
    title: "End-to-End Encryption",
    description: "Built on the Signal Protocol. No one can read your messages — not even us.",
    image: "/images/enc.png"
  },
  {
    title: "Instant Messaging",
    description: "Lightning-fast delivery. Real-time typing indicators. Message receipts.",
    image: "/images/message.png"
  },
  {
    title: "Private Voice Calls",
    description: "Crystal-clear encrypted audio with no call logs.",
    image: "/images/call.png"
  },
  {
    title: "No Phone, No Email",
    description: "All you need is a username. Nothing else. No data collection.",
    image: "/images/username.png"
  },
  {
    title: "Delete for Everyone",
    description: "Take control of your messages — delete them from both sides at any time.",
    image: "/images/delete.png"
  },
  {
    title: "Screenshot Protection",
    description: "Prevent screenshots to protect sensitive chats and media.",
    image: "/images/screenshot.png"
  },
  {
    title: "Secure Media Sharing",
    description: "Block downloads and reshares to ensure your media stays private.",
    image: "/images/media.png"
  },
  {
    title: "Minimalist Design",
    description: "Clean, distraction-free UI. Designed for focus and clarity.",
    image: "/images/easy.png"
  }
];

export default function Index() {
  return (
    <>
      <main>
        <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] min-h-screen flex items-center justify-center px-6 text-white">
          <div className="max-w-6xl text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">Messaging<br className="hidden sm:block" /> Rebuilt for Privacy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">MESEZ.ME is a radical take on modern communication. Fast. Private. Decentralized at heart. Made in India. For everyone.</p>
            <a href="#download" className="inline-block bg-white text-black text-lg px-6 py-3 font-bold rounded-full shadow-md hover:scale-105 transition-transform">Download Now</a>
          </div>
        </section>

        <section id="features" className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need, Nothing You Don’t</h2>
            <p className="text-gray-600 mt-4 text-lg">From private calls to screenshot blocking — MESEZ.ME is built with your privacy in mind.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Feature key={i} title={feature.title} image={feature.image} description={feature.description} />
            ))}
          </div>
        </section>

        <section id="philosophy" className="bg-gray-100 py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img src="/images/tracker.png" alt="No tracking" className="rounded-xl shadow-xl" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Privacy Is Not a Feature — It’s the Foundation</h2>
              <p className="text-gray-700 text-lg">At MESEZ.ME, we believe in digital dignity. We do not track you. We don’t sell your data. We exist to protect your conversations and freedom online.</p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About MESEZ.ME</h2>
            <p className="text-gray-700 text-lg">Crafted in India by a team passionate about digital freedom and secure communication. We are proudly independent, privacy-obsessed, and community-driven.</p>
          </div>
        </section>

        <section id="blog" className="bg-gray-50 py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">News & Updates</h2>
            <p className="text-gray-700 text-lg">Insights, announcements, and resources on privacy, security, and the future of communication. Coming soon.</p>
          </div>
        </section>

        <section id="download" className="bg-gradient-to-tr from-indigo-700 to-blue-700 py-24 text-white px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Now available on the Play Store. Start your journey with MESEZ.ME and take control of your privacy.</p>
          <a href="https://play.google.com/store/apps/details?id=in.messant&hl=en_IN" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">Download on Play Store</a>
        </section>
      </main>
    </>
  );
}
