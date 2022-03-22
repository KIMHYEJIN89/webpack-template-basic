//import
const path = require('path') //전역모듈
const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export  데이터 내보내기
module.exports = {
    
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',
    
    // 결과물(번들)을 반환하는 설정
    output:{
        // path:path.resolve(__dirname,'dist'),
        // filename:'main.js',
        clean:true // 새롭게 빌드 명령 하였을때, 기존에 필요없는 파일들은 제거
    },

    module:{
        rules: [
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'//먼저 해석 됨
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader' //webpack이 해석 하겠금 loader써야함
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins:[
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin ({ // dist에서 상대경로로 이미지 찾을 때 도움주는 플러그인
            patterns: [
                { from: 'static'}
            ]
        })
    ],
    devServer: {
        host:'localhost'
    }
}
