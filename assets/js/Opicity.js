import '../css/Ani.css'

export default class Opicity {
    constructor() {}

    exec(targets) {
        this.addEventListener(targets);
    }

    static install() {
        return new Opicity();
    }

    addEventListener(targets) {
        setTimeout(() => {
            targets.classList.add('content')
        }, 50)
        let _this = this
        let handleEventlist = function(e) {
            _this.addEventListener(targets);
            targets.removeEventListener('animationstart', handleEventlist);
            console.log(e.target);
        }
        targets.addEventListener('animationstart', handleEventlist);
    }
}