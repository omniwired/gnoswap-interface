import { fonts } from "@constants/font.constant";
import { css, Theme } from "@emotion/react";
import mixins from "@styles/mixins";

export const wrapper =
  (isSelectable: boolean, hasArrow: boolean) => (theme: Theme) =>
    css`
      ${mixins.flexbox("row", "center", "space-between", false)};
      gap: 8px;
      height: 32px;
      background-color: ${theme.colors.gray50};
      border-radius: 36px;
      padding: ${hasArrow ? "0px 6px" : "0px 12px 0px 6px"};
      color: ${theme.colors.colorWhite};
      ${fonts.body9};
      cursor: ${isSelectable && "pointer"};
      img {
        width: 24px;
        height: 24px;
      }
      &:hover {
        background-color: ${isSelectable && theme.colors.gray60};
      }

      svg {
        width: 16px;
        height: 16px;
      }
    `;
