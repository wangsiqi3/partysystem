module.exports = {
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: "public/index.html",
            filename: "index.html",
            title: "index",
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        home: {
            entry: 'src/home/home.js',
            template: "public/home.html",
            filename: "home.html",
            title: "home",
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': "@/assets",
                'components': "@/components",
                'common': "@/common",
                'network': '@/network',
                'views': "@/views"
            }
        }
    }
}