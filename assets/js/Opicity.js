import '../css/Ani.css'

export default class Opicity {
    constructor() {}

    static el;
    static model;

    use(Translate) {
        Opicity.model = Translate.install;
        return this
    }

    static create() {
        return new Opicity();
    }

    mount(el) {
        this.addEventListener(Array.from(el));
    }

    addEventListener(targets) {
        let target = targets.shift();
        let _this = this
        if (target) {
            target.classList.add('content');
            let handleEventlist = function(e) {
                if (targets.length != 0) {
                    setTimeout(() => {
                        _this.addEventListener(targets);
                    }, 50);
                }
            }
            target.addEventListener('animationstart', handleEventlist);
        }
    }

}