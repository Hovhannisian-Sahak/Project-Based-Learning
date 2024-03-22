const dataModel = require("./data-model");
const Cop = dataModel.Cop;
const fetchNearestCops = (coordinates, maxDistance) => {
  return Cop.find({
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
exports.fetchNearestCops = fetchNearestCops;
