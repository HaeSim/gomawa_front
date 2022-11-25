import { Schema, models, model } from 'mongoose';

export interface Post {
  _id: string;
  createdAt: string;
  title: string;
  description: string;
  from: string;
  to: string;
  anonymous: boolean;
  reveal: boolean;
}

export const PostSchema = new Schema<Post>(
  {
    createdAt: {
      type: String,
      unique: false,
      required: true,
    },
    title: {
      type: String,
      unique: false,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: true,
    },
    from: {
      type: String,
      unique: false,
      required: true,
    },
    to: {
      type: String,
      unique: false,
      required: true,
    },
    anonymous: {
      type: Boolean,
      unique: false,
      required: true,
    },
    // 공개여부
    reveal: {
      type: Boolean,
      unique: false,
      required: true,
    },
  },
  { versionKey: false },
);

// model의 첫번째 인자는 collection의 단수적 표현.
// 해당 모델에서는 'posts' collection을 사용한다.
export default models.Post || model('Post', PostSchema);
