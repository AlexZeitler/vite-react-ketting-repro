# vite-react-ketting-repro

`yarn dev` results in:

```bash
yarn run v1.22.4
$ vite
 > node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:14: error: [vite:dep-scan] Failed to resolve entry for package "react-ketting". The package may have incorrect main/module/exports specified in its package.json.
    32023 │         throw new Error(`Failed to resolve entry for package "${id}". ` +
          ╵               ^
    at resolvePackageEntry (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:15)
    at tryNodeResolve (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:31860:11)
    at Context.resolveId (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:31743:28)
    at Object.resolveId (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43605:55)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async resolve (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43799:26)
    at async /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43884:34
    at async callback (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:724:28)
    at async handleRequest (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:595:30)

   node_modules/vite/dist/node/chunks/dep-0776dd57.js:43874:18: note: This error came from the "onResolve" callback registered here
    43874 │             build.onResolve({
          ╵                   ~~~~~~~~~
    at setup (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43874:19)
    at handlePlugins (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:686:7)
    at Object.buildOrServe (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:903:44)
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1444:17
    at new Promise (<anonymous>)
    at Object.build (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1443:14)
    at Object.build (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1334:51)
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43753:54
    at Array.map (<anonymous>)

   src/App.tsx:5:32: note: The plugin "vite:dep-scan" was triggered by this import
        5 │ import { KettingProvider } from "react-ketting";
          ╵                                 ~~~~~~~~~~~~~~~

 > node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:14: error: [vite:dep-scan] Failed to resolve entry for package "react-ketting". The package may have incorrect main/module/exports specified in its package.json.
    32023 │         throw new Error(`Failed to resolve entry for package "${id}". ` +
          ╵               ^
    at resolvePackageEntry (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:15)
    at tryNodeResolve (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:31860:11)
    at Context.resolveId (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:31743:28)
    at Object.resolveId (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43605:55)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async resolve (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43799:26)
    at async /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43884:34
    at async callback (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:724:28)
    at async handleRequest (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:595:30)

   node_modules/vite/dist/node/chunks/dep-0776dd57.js:43874:18: note: This error came from the "onResolve" callback registered here
    43874 │             build.onResolve({
          ╵                   ~~~~~~~~~
    at setup (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43874:19)
    at handlePlugins (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:686:7)
    at Object.buildOrServe (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:903:44)
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1444:17
    at new Promise (<anonymous>)
    at Object.build (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1443:14)
    at Object.build (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1334:51)
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/vite/dist/node/chunks/dep-0776dd57.js:43753:54
    at Array.map (<anonymous>)

   src/CustomerView.tsx:2:28: note: The plugin "vite:dep-scan" was triggered by this import
        2 │ import { useResource } from 'react-ketting';
          ╵                             ~~~~~~~~~~~~~~~

error when starting dev server:
Error: Build failed with 2 errors:
node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:14: error: [vite:dep-scan] Failed to resolve entry for package "react-ketting". The package may have incorrect main/module/exports specified in its package.json.
node_modules/vite/dist/node/chunks/dep-0776dd57.js:32023:14: error: [vite:dep-scan] Failed to resolve entry for package "react-ketting". The package may have incorrect main/module/exports specified in its package.json.
    at failureErrorWithLog (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1224:15)
    at buildResponseToResult (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:936:32)
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:1035:20
    at /Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:568:9
    at handleIncomingPacket (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:657:9)
    at Socket.readFromStdout (/Users/alexzeitler/src/vite-react-ketting-repro/node_modules/esbuild/lib/main.js:535:7)
    at Socket.emit (events.js:314:20)
    at addChunk (_stream_readable.js:303:12)
    at readableAddChunk (_stream_readable.js:279:9)
    at Socket.Readable.push (_stream_readable.js:218:10)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```