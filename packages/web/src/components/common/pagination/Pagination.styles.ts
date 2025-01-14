import { fonts } from "@constants/font.constant";
import styled from "@emotion/styled";
import mixins from "@styles/mixins";

export const PaginationWrapper = styled.ul`
  ${mixins.flexbox("row", "center", "center", false)};
`;

export const PaginationItem = styled.li`
  & + & {
    margin-left: 4px;
  }
`;

export const Button = styled.button<{
  selected?: boolean;
}>`
  ${fonts.body11};
  ${mixins.flexbox("row", "center", "center")};
  color: ${({ theme }) => theme.colors.gray40};
  background-color: ${({ theme }) => theme.colors.gray60};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
  &.selected,
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors.colorWhite};
    background-color: ${({ theme }) => theme.colors.gray50};
    border: 1px solid ${({ theme }) => theme.colors.gray40};
  }

  & .icon-arrow-pagination {
    & * {
      fill: ${({ theme }) => theme.colors.gray40};
    }
  }
`;
