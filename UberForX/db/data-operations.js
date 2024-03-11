const dataoModel = require("./data-model");
const Cop = dataoModel.Cop;
export const fetchNearestCops = (coordinates, maxDistance) => {
  Cop.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates,
        },
        $maxDistance: maxDistance,
      },
    },
  })
    .exec()
    .catch((err) => {
      console.log(err);
    });
};
