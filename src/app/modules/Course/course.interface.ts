// import { Types } from 'mongoose';

export type ITags = {
  name: string;
  isDeleted: boolean;
};

export type IDetails = {
  level: string;
  description: string;
};

export type ICourse = {
  title: string;
  instructor: string;
//   categoryId: Types.ObjectId;
  price: number;
  tags: ITags[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: IDetails;
};