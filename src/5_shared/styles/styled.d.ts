import 'styled-components';
import * as ThemeTypes from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeTypes.ColorType;
    gap: ThemeTypes.GapType;
    fontSize: ThemeTypes.FontSizeType;
    fontSizeCss: ThemeTypes.FontSizeType2;
    padding: ThemeTypes.PaddingType;
    transition: ThemeTypes.TransitionType;
    flex: ThemeTypes.FlexType;
    fontFamily: ThemeTypes.FontFamilyType;
    height: ThemeTypes.HeightType;
    buttonSize: ThemeTypes.ButtonSizeType;
    gradient: ThemeTypes.GradientType;
    boxShadow: ThemeTypes.BoxShadowType;
    borderRadius: ThemeTypes.BorderRadiusType;
    buttonVariant: ThemeTypes.ButtonVariantType;
  }
}
