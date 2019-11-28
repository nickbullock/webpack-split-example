import { Widget } from '../widgets/popular-widget';

export class WidgetFactory {
    async create(name) {
        if (name === 'popular-widget') return await Promise.resolve(Widget);
        return await import(`../widgets/${name}/index`)
    }
}
