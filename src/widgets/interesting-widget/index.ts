import get from 'lodash.get';

export class Widget {
    create() {
        return get({}, 'key');
    }
}
