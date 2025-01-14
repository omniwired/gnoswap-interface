import React from "react";
import { wrapper } from "./IncentivizedPoolCardList.styles";
import { type PoolListProps } from "@containers/incentivized-pool-card-list-container/IncentivizedPoolCardListContainer";
import IncentivizedPoolCard from "@components/earn/incentivized-pool-card/IncentivizedPoolCard";
import { SHAPE_TYPES, skeletonStyle } from "@constants/skeleton.constant";
import LoadMoreButton from "@components/common/load-more-button/LoadMoreButton";
interface IncentivizedPoolCardListProps {
  list: Array<PoolListProps>;
  loadMore?: boolean;
  isFetched: boolean;
  onClickLoadMore?: () => void;
}

const IncentivizedPoolCardList: React.FC<IncentivizedPoolCardListProps> = ({
  list,
  loadMore,
  isFetched,
  onClickLoadMore,
}) => (
  <>
    <div css={wrapper}>
      {isFetched &&
        list.length > 0 &&
        list.map((item, idx) => <IncentivizedPoolCard item={item} key={idx} />)}
      {!isFetched &&
        Array.from({ length: 8 }).map((_, idx) => (
          <span
            key={idx}
            className="card-skeleton"
            css={skeletonStyle("100%", SHAPE_TYPES.ROUNDED_SQUARE)}
          />
        ))}
    </div>
    {loadMore && onClickLoadMore && (
      <div className="load-more">
        <LoadMoreButton show={loadMore} onClick={onClickLoadMore} />
      </div>
    )}
  </>
);

export default IncentivizedPoolCardList;
