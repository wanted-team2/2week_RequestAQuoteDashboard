type statusType = '대기중' | '상담중';

export interface ICardData {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: statusType;
}
