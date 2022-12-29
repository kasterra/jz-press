import "styled-components";
import { Color, Font } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: { [key in Color]: string };
    font: { [key in Font]: string };
  }
}
