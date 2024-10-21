import { model, Schema } from 'mongoose';

const placesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      contry: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      mainCategory: {
        type: String,
        required: true,
      },
      subCategory: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      required: false,
    },
    visitors: {
      type: Number,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    coordinates: {
      lat: {
        type: String,
        required: false,
      },
      lng: {
        type: String,
        required: false,
      },
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const PlacesCollection = model('places', placesSchema);
