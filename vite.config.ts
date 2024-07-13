import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        port: 3000
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: (chunkInfo) => {
                    if (chunkInfo.name) {
                        let n: RegExpMatchArray | null | string
                        if (chunkInfo.facadeModuleId?.includes("@mui")) {
                            // If its a MUI component
                            n = chunkInfo.facadeModuleId.match(/mui\/material\/\w+/)
                            if (n) {
                                return `${n[0]}-[hash].js`;
                            }
                        }
                    }
                    return 'js/[name]-[hash].js';
                },
            },
        },
    },
})
