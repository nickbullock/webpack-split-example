import { Widget } from './library/Widget';
import { WidgetFactory } from './library/WidgetFactory';

const widget = new Widget();
const widgetFactory = new WidgetFactory();

widgetFactory.create('popular-widget').then(({ Widget }) => {
    console.log('>> Popular', Widget)
});
widgetFactory.create('edge-case-widget').then(({ Widget }) => {
    console.log('>> Edge case', Widget)
});
widgetFactory.create('interesting-widget').then(({ Widget }) => {
    console.log('>> Interesting', Widget)
});

console.log('>>> Widget', widget)
