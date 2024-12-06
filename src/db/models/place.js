import { model, Schema, Types } from 'mongoose';

const placesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: 'users',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PlacesCollection = model('places', placesSchema);

// category: {
//   mainCategory: {
//     type: String,
//     required: true,
//   },
//   subCategory: {
//     type: String,
//     required: true,
//   },
// },
// rating: {
//   type: Number,
//   required: false,
// },
// imageUrl: {
//   type: String,
//   required: true,
// },
// coordinates: {
//   lat: {
//     type: String,
//     required: false,
//   },
//   lng: {
//     type: String,
//     required: false,
//   },
// },
