import { MessageCircle, Filter, Handshake, Waves, Share2 } from 'lucide-react';
import { ShareButton } from '@/components/ShareButton';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen px-4">
      <main className="w-full max-w-5xl mx-auto">
        <HeroSection />

        <div id="projects" className="space-y-16">
          <section id="logic-productivity">
            <h2 className="text-2xl font-semibold text-white mb-6">Logic &amp; Productivity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-purple-500 opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center space-x-4">
                  <Filter className="text-purple-400 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Refine</h3>{' '}
                    <p className="text-sm text-gray-400">refine.sabiai.work</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  AI Toolkit for Prompt Engineers.
                </p>
              </div>

              <div
                className="transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-teal-500 opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center space-x-4">
                  <Handshake className="text-teal-400 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Facilitator
                    </h3>{' '}
                    <p className="text-sm text-gray-400">
                      facilitator.sabiai.work
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Agile coaching & team-building.
                </p>
              </div>
            </div>
          </section>

          <section id="culture-context">
            <h2 className="text-2xl font-semibold text-white mb-6">Culture &amp; Context</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://naijaspeak.sabiai.work"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-yellow-500"
              >
                <div className="flex items-center space-x-4">
                  <MessageCircle className="text-yellow-400 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      NaijaSpeak
                    </h3>
                    <p className="text-sm text-gray-400">
                      naijaspeak.sabiai.work
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Pidgin translation in context.
                </p>
              </a>

              <div
                className="transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-green-500 opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400 h-8 w-8"
                  >
                    <path d="M4.2 10.2C5.4 7.2 8.4 5 12 5c3.6 0 6.6 2.2 7.8 5.2" />
                    <path d="M4.5 16.5c0 3 2.5 5.5 7.5 5.5s7.5-2.5 7.5-5.5" />
                    <path d="M9.5 13.5c-.2 0-.5.2-.5.5v1c0 .3.2.5.5.5h5c.2 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-5z" />
                    <path d="M7.5 12.5c0-1.5 1-2.5 2-2.5h5c1 0 2 1 2 2.5" />
                    <path d="M9 8a1 1 0 0 1-1-1 1 1 0 1 1 2 0 1 1 0 0 1-1 1z" />
                    <path d="M15 8a1 1 0 0 1-1-1 1 1 0 1 1 2 0 1 1 0 0 1-1 1z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Our Mumu don Do
                    </h3>
                    <p className="text-sm text-gray-400">
                      our-mumu-don-do.sabiai.work
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Nigerian heritage & education.
                </p>
              </div>
            </div>
          </section>

          <section id="community-wellness">
            <h2 className="text-2xl font-semibold text-white mb-6">Community &amp; Wellness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://aqualog.asemota.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-blue-500"
              >
                <div className="flex items-center space-x-4">
                  <Waves className="text-blue-400 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Aqualog
                    </h3>
                    <p className="text-sm text-gray-400">
                      aqualog.asemota.ch
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Intelligent tracking for coldwater swimmers.
                </p>
              </a>
              <a
                href="https://studio--studio-8868769584-6a914.us-central1.hosted.app"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-orange-500"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400 h-8 w-8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 0 1 8.66 5H3.34A10 10 0 0 1 12 2z" />
                    <path d="M12 22a10 10 0 0 0 8.66-5H3.34A10 10 0 0 0 12 22z" />
                    <path d="M17.66 7 12 12l-5.66-5" />
                    <path d="M17.66 17 12 12l-5.66 5" />
                    <path d="m12 2-4 10 4 10 4-10-4-10z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Kids Cup Helpers
                    </h3>
                    <p className="text-sm text-gray-400">
                      studio--studio-8868769584-6a914.us-central1.hosted.app
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Volunteer & shift planning for the FC Gelterkinden Kids Cup.
                </p>
              </a>
              <a
                href="https://coach.g-kicker.sabiai.work"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-green-500"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400 h-8 w-8"
                  >
                    <path d="m21.2 14.8-6-6A4.98 4.98 0 0 0 11.8 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c.8 0 1.5-.2 2.2-.6l6 6c.5.5 1.4.5 1.9 0l1.1-1.1c.4-.5.4-1.3-.1-1.7z" />
                    <path d="m11.8 7-3.9 3.9" />
                    <path d="M17.6 17.6 14 14" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      G-Kicker Coach
                    </h3>
                    <p className="text-sm text-gray-400">
                      coach.g-kicker.sabiai.work
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  Digital training plans and drill management for soccer coaches for 6-7 years old.
                </p>
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="mt-16 w-full max-w-5xl mx-auto text-left">
        <div className="mb-4">
          <ShareButton />
        </div>
        <p className="text-sm text-gray-500">
          Powered by{' '}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-200"
          >
            Firebase
          </a>{' '}
          &amp;{' '}
          <a
            href="https://www.hostpoint.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-200"
          >
            Hostpoint
          </a>
          . ©sabi ai - 2025 - 2026
        </p>
      </footer>
    </div>
  );
}
