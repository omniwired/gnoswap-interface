import { PoolChartResponse } from "@/repositories/pool";
import { PoolChartModel } from "../pool-chart-model";

export class PoolChartModelMapper {
  public static mappedChartTicks(response: PoolChartResponse): PoolChartModel {
    const { current, ticks } = response;
    return {
      current,
      ticks,
    };
  }
}
