import { CommandGenerator } from "@/components/command-generator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">DevCommands</h1>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Beta</span>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <section className="mx-auto max-w-5xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Command Generator</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get all the commands you need to start your project with various frameworks and libraries.
            </p>
          </div>
          <CommandGenerator />
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevCommands. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="text-sm text-muted-foreground hover:underline">
              GitHub
            </a>
            <a href="/about" className="text-sm text-muted-foreground hover:underline">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

