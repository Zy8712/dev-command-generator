"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Box,
  Code,
  Database,
  FileCode,
  FlaskRoundIcon as Flask,
  Globe,
  Layers,
  Leaf,
  Package,
  PenTool,
  Server,
  Ship,
  Workflow,
} from "lucide-react"

export function CommandGenerator() {
  const [copied, setCopied] = useState(false)
  const [framework, setFramework] = useState("react")
  const [packageManager, setPackageManager] = useState("npm")
  const [typescript, setTypescript] = useState("true")
  const [category, setCategory] = useState("frontend")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCommands = () => {
    const commands: Record<string, Record<string, Record<string, string>>> = {
      frontend: {
        react: {
          npm:
            typescript === "true" ? "npx create-react-app my-app --template typescript" : "npx create-react-app my-app",
          yarn:
            typescript === "true"
              ? "yarn create react-app my-app --template typescript"
              : "yarn create react-app my-app",
          pnpm:
            typescript === "true"
              ? "pnpm create react-app my-app --template typescript"
              : "pnpm create react-app my-app",
        },
        vue: {
          npm: "npm init vue@latest",
          yarn: "yarn create vue",
          pnpm: "pnpm create vue",
        },
        angular: {
          npm: "npm install -g @angular/cli\nng new my-app",
          yarn: "yarn global add @angular/cli\nng new my-app",
          pnpm: "pnpm add -g @angular/cli\nng new my-app",
        },
        nextjs: {
          npm:
            typescript === "true"
              ? "npx create-next-app@latest my-app --typescript"
              : "npx create-next-app@latest my-app",
          yarn: typescript === "true" ? "yarn create next-app my-app --typescript" : "yarn create next-app my-app",
          pnpm: typescript === "true" ? "pnpm create next-app my-app --typescript" : "pnpm create next-app my-app",
        },
        svelte: {
          npm: "npm create svelte@latest my-app",
          yarn: "yarn create svelte my-app",
          pnpm: "pnpm create svelte my-app",
        },
      },
      backend: {
        express: {
          npm:
            typescript === "true"
              ? "mkdir my-express-app && cd my-express-app\nnpm init -y\nnpm install express typescript ts-node @types/node @types/express\nnpx tsc --init"
              : "mkdir my-express-app && cd my-express-app\nnpm init -y\nnpm install express",
          yarn:
            typescript === "true"
              ? "mkdir my-express-app && cd my-express-app\nyarn init -y\nyarn add express typescript ts-node @types/node @types/express\nyarn tsc --init"
              : "mkdir my-express-app && cd my-express-app\nyarn init -y\nyarn add express",
          pnpm:
            typescript === "true"
              ? "mkdir my-express-app && cd my-express-app\npnpm init -y\npnpm add express typescript ts-node @types/node @types/express\npnpm tsc --init"
              : "mkdir my-express-app && cd my-express-app\npnpm init -y\npnpm add express",
        },
        nestjs: {
          npm: "npm i -g @nestjs/cli\nnest new my-nest-app",
          yarn: "yarn global add @nestjs/cli\nnest new my-nest-app",
          pnpm: "pnpm add -g @nestjs/cli\nnest new my-nest-app",
        },
        django: {
          npm: "pip install django\ndjango-admin startproject myproject",
          yarn: "pip install django\ndjango-admin startproject myproject",
          pnpm: "pip install django\ndjango-admin startproject myproject",
        },
        flask: {
          npm: "pip install flask\nmkdir my-flask-app && cd my-flask-app\npip install python-dotenv\ntouch app.py .env",
          yarn: "pip install flask\nmkdir my-flask-app && cd my-flask-app\npip install python-dotenv\ntouch app.py .env",
          pnpm: "pip install flask\nmkdir my-flask-app && cd my-flask-app\npip install python-dotenv\ntouch app.py .env",
        },
      },
      database: {
        mongodb: {
          npm: "npm install mongodb",
          yarn: "yarn add mongodb",
          pnpm: "pnpm add mongodb",
        },
        postgresql: {
          npm: "npm install pg",
          yarn: "yarn add pg",
          pnpm: "pnpm add pg",
        },
        mysql: {
          npm: "npm install mysql2",
          yarn: "yarn add mysql2",
          pnpm: "pnpm add mysql2",
        },
        prisma: {
          npm: "npm install prisma --save-dev\nnpx prisma init",
          yarn: "yarn add prisma --dev\nyarn prisma init",
          pnpm: "pnpm add prisma --save-dev\npnpm prisma init",
        },
      },
      devops: {
        docker: {
          npm: '# Create a Dockerfile in your project root\n\n# Example Dockerfile content:\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]',
          yarn: '# Create a Dockerfile in your project root\n\n# Example Dockerfile content:\nFROM node:18-alpine\nWORKDIR /app\nCOPY package.json yarn.lock ./\nRUN yarn install --frozen-lockfile\nCOPY . .\nEXPOSE 3000\nCMD ["yarn", "start"]',
          pnpm: '# Create a Dockerfile in your project root\n\n# Example Dockerfile content:\nFROM node:18-alpine\nWORKDIR /app\nCOPY package.json pnpm-lock.yaml ./\nRUN npm install -g pnpm && pnpm install\nCOPY . .\nEXPOSE 3000\nCMD ["pnpm", "start"]',
        },
        kubernetes: {
          npm: "# Create a deployment.yaml file\n\n# Example deployment.yaml content:\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest\n        ports:\n        - containerPort: 3000",
          yarn: "# Create a deployment.yaml file\n\n# Example deployment.yaml content:\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest\n        ports:\n        - containerPort: 3000",
          pnpm: "# Create a deployment.yaml file\n\n# Example deployment.yaml content:\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest\n        ports:\n        - containerPort: 3000",
        },
        vercel: {
          npm: "npm install -g vercel\nvercel login\nvercel",
          yarn: "yarn global add vercel\nvercel login\nvercel",
          pnpm: "pnpm add -g vercel\nvercel login\nvercel",
        },
      },
    }

    return commands[category]?.[framework]?.[packageManager] || "# Select options to generate commands"
  }

  const getFrameworkOptions = () => {
    const options: Record<string, { label: string; value: string; icon: React.ReactNode }[]> = {
      frontend: [
        { label: "React", value: "react", icon: <Globe className="h-4 w-4 mr-2" /> },
        { label: "Vue", value: "vue", icon: <Layers className="h-4 w-4 mr-2" /> },
        { label: "Angular", value: "angular", icon: <PenTool className="h-4 w-4 mr-2" /> },
        { label: "Next.js", value: "nextjs", icon: <Server className="h-4 w-4 mr-2" /> },
        { label: "Svelte", value: "svelte", icon: <FileCode className="h-4 w-4 mr-2" /> },
      ],
      backend: [
        { label: "Express", value: "express", icon: <Server className="h-4 w-4 mr-2" /> },
        { label: "NestJS", value: "nestjs", icon: <Code className="h-4 w-4 mr-2" /> },
        { label: "Django", value: "django", icon: <Leaf className="h-4 w-4 mr-2" /> },
        { label: "Flask", value: "flask", icon: <Flask className="h-4 w-4 mr-2" /> },
      ],
      database: [
        { label: "MongoDB", value: "mongodb", icon: <Database className="h-4 w-4 mr-2" /> },
        { label: "PostgreSQL", value: "postgresql", icon: <Database className="h-4 w-4 mr-2" /> },
        { label: "MySQL", value: "mysql", icon: <Database className="h-4 w-4 mr-2" /> },
        { label: "Prisma", value: "prisma", icon: <Database className="h-4 w-4 mr-2" /> },
      ],
      devops: [
        { label: "Docker", value: "docker", icon: <Box className="h-4 w-4 mr-2" /> },
        { label: "Kubernetes", value: "kubernetes", icon: <Ship className="h-4 w-4 mr-2" /> },
        { label: "Vercel", value: "vercel", icon: <Workflow className="h-4 w-4 mr-2" /> },
      ],
    }

    return options[category] || []
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    // Reset framework when category changes
    setFramework(getFrameworkOptions()[0]?.value || "")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generate Setup Commands</CardTitle>
        <CardDescription>Select your tech stack to get the commands you need to start your project</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Tabs defaultValue="frontend" className="mt-2" value={category} onValueChange={handleCategoryChange}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="framework">Framework/Library</Label>
              <Select value={framework} onValueChange={setFramework}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>
                <SelectContent>
                  {getFrameworkOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center">
                        {option.icon}
                        {option.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package-manager">Package Manager</Label>
              <Select value={packageManager} onValueChange={setPackageManager}>
                <SelectTrigger id="package-manager">
                  <SelectValue placeholder="Select package manager" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="npm">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-2" />
                      npm
                    </div>
                  </SelectItem>
                  <SelectItem value="yarn">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-2" />
                      yarn
                    </div>
                  </SelectItem>
                  <SelectItem value="pnpm">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-2" />
                      pnpm
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(category === "frontend" || category === "backend") && (
            <div className="space-y-2">
              <Label>TypeScript</Label>
              <RadioGroup
                defaultValue="true"
                value={typescript}
                onValueChange={setTypescript}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="ts-yes" />
                  <Label htmlFor="ts-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="ts-no" />
                  <Label htmlFor="ts-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Commands</Label>
            <Button variant="outline" size="sm" className="h-8 gap-1" onClick={() => copyToClipboard(getCommands())}>
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>
          <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
            <code>{getCommands()}</code>
          </pre>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4 text-sm text-muted-foreground">
        <p>Commands are for demonstration purposes. Check official documentation for the latest syntax.</p>
      </CardFooter>
    </Card>
  )
}

