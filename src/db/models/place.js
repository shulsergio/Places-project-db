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
      country: {
        type: String,
        required: true,
      },
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const PlacesCollection = model('places', placesSchema);
