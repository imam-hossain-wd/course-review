import { Schema, model } from 'mongoose';
import { ICourse, IDetails, ITags } from './course.interface';

const tagSchema = new Schema<ITags>({
  name: String,
  isDeleted: Boolean,
});

const detailsSchema = new Schema<IDetails>({
  level: { type: String, required: true },
  description: { type: String, required: true },
});

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
//   categoryId: {
//     type: Schema.Types.ObjectId,
//     required: true,
//   },
  price: {
    type: Number,
    required: true,
  },
  tags: [tagSchema],
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number, required: true },
  details: detailsSchema,
});

export const CourseModel = model<ICourse>('Course', courseSchema);