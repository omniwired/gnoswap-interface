import { fonts } from "@constants/font.constant";
import { css, type Theme } from "@emotion/react";
import mixins from "@styles/mixins";
import iconChecked from "@components/common/icons/svg/icon-checked.svg";
import iconCheckboxBlank from "@components/common/icons/svg/icon-checkbox-blank.svg";

export const wrapper = (theme: Theme) => css`
  ${mixins.flexbox("column", "flex-start", "flex-start")};
  gap: 16px;
  width: 500px;
  height: 100%;
  color: ${theme.colors.gray10};
  background-color: ${theme.colors.gray60};
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray50};
  box-shadow: 10px 14px 60px rgba(0, 0, 0, 0.4);
  padding: 23px;
  .title {
    ${fonts.h6};
  }
`;

export const inputStyle = (theme: Theme) => css`
  .select-all-label {
    gap: 8px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    ${mixins.flexbox("row", "center", "center")};
    &:before {
      ${mixins.flexbox("row", "center", "center")};
      cursor: pointer;
      content: "";
      width: 24px;
      height: 24px;
      mask-repeat: no-repeat;
      mask-position: center center;
      mask-size: contain;
      background-color: ${theme.colors.gray40};
      mask-image: url(${iconCheckboxBlank});
    }
  }
  input[type="checkbox"]:checked + label:before {
    background-color: ${theme.colors.colorPoint};
    mask-image: url(${iconChecked});
  }
`;
