import React from "react";
import SelectLiquidityListItem from "@components/stake/select-lilquidity-list-item/SelectLiquidityListItem";
import { wrapper } from "./SelectLiquidityList.styles";

interface SelectLiquidityProps {
  list: any[];
  checkedList: string[];
  onCheckedItem: (checked: boolean, tokenId: string) => void;
  onCheckedAll: (checked: boolean) => void;
  checkedAll: boolean;
}

const SelectLiquidityList: React.FC<SelectLiquidityProps> = ({
  list,
  checkedList,
  onCheckedItem,
  onCheckedAll,
  checkedAll,
}) => {
  return (
    <div css={wrapper}>
      <div className="checked-all-wrap">
        <input
          id="checkbox-all"
          type="checkbox"
          checked={checkedAll}
          onChange={e => onCheckedAll(e.target.checked)}
        />
        <label htmlFor="checkbox-all" className="select-all-label">
          Select All
        </label>
        <span>Liquidity</span>
      </div>
      <ul>
        {list.map((item, idx) => (
          <SelectLiquidityListItem
            item={item}
            checkedList={checkedList}
            onCheckedItem={onCheckedItem}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectLiquidityList;
