export default class Animate {

    static el;
    static model;

    constructor() {
        this.el = Animate.el;
    }

    use(Translate) {
        Animate.model = Translate.install;
        return this
    }

    static create() {
        return new Animate();
    }

    mount(el) {
        if (Array.isArray(el)) {
            el.forEach(element => {
                Animate.el = element.el;
                Animate.model().exec();
            });
        } else {
            Animate.el = el;
            Animate.model().exec();
        }
    }
}