import pick from 'lodash.pick';

export class Widget {
    create() {
        return [pick({}, 'some-key')];
    }
}
