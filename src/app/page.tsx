
import { MessageCircle, Filter, Handshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen py-16 px-4">
      <main className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-none">
            <span className="text-gradient">SABI AI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-400 max-w-3xl mx-auto">
            Knowledge at Work:{' '}
            <strong className="text-gradient">Niche Productivity</strong> & AI
            Solutions.
          </p>
        </header>

        <hr className="border-gray-700 mb-12" />

        <section id="projects">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Work
          </h2>

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
                An AI-driven language tool for translating and understanding
                Nigerian Pidgin English in context.
              </p>
            </a>

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
                The ultimate toolkit for prompt engineers to structure, save,
                and iterate on complex AI prompts.
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
                An agile coaching assistant to generate dynamic meeting agendas,
                retrospectives, and team-building exercises.
              </p>
            </div>

            <a
              href="https://our-mumu-don-do.sabiai.work"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-red-500"
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
                  className="text-red-400 h-8 w-8"
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
                Arming Nigeria's next generation with truth. We use raw stories to dismantle false histories and build a future free from the old nonsense.
              </p>
            </a>
          </div>
        </section>
      </main>
      <footer className="mt-16 text-center">
        <p className="text-sm text-gradient">
          Powered by{' '}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-200"
          >
            Firebase
          </a>{' '}
          &{' '}
          <a
            href="https://www.hostpoint.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-200"
          >
            Hostpoint
          </a>
          . ©sabi ai - 2025
        </p>
      </footer>
    </div>
  );
}
