import DoubleLogo from "@components/common/double-logo/DoubleLogo";
import React from "react";
import { wrapper } from "./SelectLiquidityItem.styles";

interface SelectLiquidityItemProps {
  item: any;
  checkedList: string[];
  onCheckedItem: (checked: boolean, tokenId: string) => void;
}

const SelectLiquidityItem: React.FC<SelectLiquidityItemProps> = ({
  item,
  checkedList,
  onCheckedItem,
}) => {
  return (
    <li css={wrapper(checkedList.includes(item.tokenId))}>
      <input
        id={`checkbox-item-${item.tokenId}`}
        type="checkbox"
        checked={checkedList.includes(item.tokenId)}
        onChange={e => onCheckedItem(e.target.checked, item.tokenId)}
      />
      <label htmlFor={`checkbox-item-${item.tokenId}`} />
      <DoubleLogo left={item.pairLogo[0]} right={item.pairLogo[1]} size={24} />
      <span className="token-id">{item.tokenId}</span>
      <span className="period-value">21 days</span>
      <span className="liquidity-value">{item.liquidity}</span>
    </li>
  );
};

export default SelectLiquidityItem;
