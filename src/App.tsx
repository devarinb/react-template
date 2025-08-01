function App() {
  const tech = ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui (cva, clsx, tailwind-merge)', 'lucide-react', 'TanStack Query', 'SWC (React SWC plugin)'];

  return (
    <main className='min-h-dvh flex items-center justify-center p-6'>
      <div className='max-w-xl w-full space-y-4 text-center'>
        <h1 className='text-3xl font-bold'>React 19 + Vite Starter</h1>
        <p className='text-sm opacity-80'>Tech included out of the box:</p>
        <ul className='grid sm:grid-cols-2 gap-2 text-left'>
          {tech.map((t) => (
            <li key={t} className='rounded-md border px-3 py-2 text-sm bg-card'>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
