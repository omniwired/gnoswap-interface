import React from "react";
import CardList, { type ListProps } from "@components/home/card-list/CardList";
import { wrapper } from "./RecentlyAddedCardList.styles";
import IconClock from "@components/common/icons/IconClock";

interface RecentlyAddedCardListProps {
  list: Array<ListProps>;
}

const RecentlyAddedCardList: React.FC<RecentlyAddedCardListProps> = ({
  list,
}) => {
  return (
    <div css={wrapper}>
      <h2>
        <IconClock className="icon-clock" /> Recently Added
      </h2>
      <CardList list={list} />
    </div>
  );
};

export default RecentlyAddedCardList;
