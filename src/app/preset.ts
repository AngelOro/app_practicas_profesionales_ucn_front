//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#e5f2ff', // muy claro
      100: '#b2d8ff',
      200: '#7fbeff',
      300: '#4ca4fe',
      400: '#198aff',
      500: '#005cbb', // tu azul base
      600: '#004b99',
      700: '#003e7f',
      800: '#003266',
      900: '#00254c',
      950: '#001933'  // casi negro con tinte azul
    }
  }
});

export default MyPreset;
