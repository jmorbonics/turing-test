export const Home = () => (
  <div className="mt-10 flex w-full flex-col">
    <div className="flex w-full flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Ready to discover the truth about AI?</span>
      </h2>

      <a
        target="_blank"
        href="https://github.com/CS222-UIUC/main-project-team-14"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >
        Turing Test Coming Soon!
      </a>
    </div>
    <br/><br/><br/><br/><br/>
    <div className="flex justify-center">
      <img className="w-1/2 md:w-2/3" src="./logo-text.png" alt="Vite Logo"/>
    </div>
  </div>
);
