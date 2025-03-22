import { useChartDataQuery, type Params } from 'src/services/Market';

const usePAXChartPrice = (params: Params) => {
  const { data } = useChartDataQuery(params);

  const { prices = [] } = data || {};

  const A = prices[0]?.[1] || 1;
  const B = prices[prices.length - 1]?.[1] || 1;
  return { ...data, growth: ((B - A) / A) * 100 };
};

export default usePAXChartPrice;
