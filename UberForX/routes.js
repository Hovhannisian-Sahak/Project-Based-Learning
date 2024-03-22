const express = require("express");
const router = express.Router();
const dpOperations = require("./db/data-operations");
router.get("/cops", async (req, res) => {
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  console.log(Number(req.query.lng));
  const nearestCops = await dpOperations.fetchNearestCops([lng, lat], 2000);
  console.log(nearestCops);
  res.json({
    cops: nearestCops,
  });
  
});
module.exports = router;
