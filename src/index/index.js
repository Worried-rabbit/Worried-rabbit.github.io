import Ani from "../../assets/js/Ani.js"
import webpackConfig from '../../config/webpack.config.js'
import Webpack from '../../assets/js/Webpack.js'

let webpack = new Webpack(webpackConfig);
console.log(webpack);


let ani = new Ani({
    targets: [{
        el: document.querySelector('.box1'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('.box2'),
        animationClassName: 'change'
    }],
    count: 1,
    reverse: true
})

console.log(ani);