import { create } from '@storybook/theming';


export default create({
    base: 'light',
    brandTitle: 'Roberto Ds',
})

import { addons } from '@storybook/addons';
import customTheme from './robertoTheme';

addons.setConfig({
    theme: customTheme
});