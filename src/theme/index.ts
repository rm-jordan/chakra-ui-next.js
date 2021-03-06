
import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";


const theme = extendTheme({
  fonts: {
    heading: `Montserrat ${base.fonts?.heading}`,
    body: `Inter ${base.fonts?.body}`,
  },
  // used to override specific styles within Chakra UI
  components : {
    Input: {
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: 'brand.500',
            }
          }
        }
      },
      sizes: {
        md: {
          field: {
            borderRadius: 'none',
          }
        }
      }
    }
  },
  colors: {
    brand: {
      50: '#f5fee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#203300',
    }
  },
}, withDefaultColorScheme({
  colorScheme:'brand',
  components:['Checkbox'],
}),
withDefaultVariant({
  variant: 'filled',
  components:['Input', 'Select'],
})
);

export default theme;

// font theme set to base if font not applicable (a fallback)