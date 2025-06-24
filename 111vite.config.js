import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
 
export default defineConfig({
    plugins: [
        uni(),        
        // 自动导入配置
        AutoImport({
            imports:[
                // 预设
                'vue',
                'uni-app'                
            ]
        })
    ],
    server: {
		proxy: {
			'/api': {
				target: 'http://localhost:5173',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		}
	}
})