import { MessageCircle, Filter, Handshake, AlertTriangle } from 'lucide-react';

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

            <a
              href="https://refine.sabiai.work"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-purple-500"
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
            </a>

            <a
              href="https://facilitator.sabiai.work"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-teal-500"
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
            </a>

            <a
              href="https://mumu.monitor.sabiai.work"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover transition duration-300 ease-in-out block p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 border-red-500"
            >
              <div className="flex items-center space-x-4">
                <AlertTriangle className="text-red-400 h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Mumu Monitor
                  </h3>
                  <p className="text-sm text-gray-400">
                    mumu.monitor.sabiai.work
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                A focused utility for monitoring specific, simple operational
                data—no nonsense, just the essentials.
              </p>
            </a>
          </div>
        </section>
      </main>
      <footer className="mt-16 text-center text-gray-600">
        <p className="text-sm">
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
          . Built by Stefan Asemota.
        </p>
      </footer>
    </div>
  );
}