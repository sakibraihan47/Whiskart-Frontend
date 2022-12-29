const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cart = require("../models/cart.model.js");
dotenv.config();

exports.getRecommended = async (req, res) => {
  console.log(
    "🚀 ~ file: recommendation.controller.js:12 ~ exports.getRecommended= ~ req.body",
    req.body
  );
  const pipeline = [
    {
      $match: {
        artwork: mongoose.Types.ObjectId(req.body.artwork),
      },
    },
    {
      $project: {
        user: 1,
        artwork: 1,
      },
    },
    {
      $lookup: {
        from: "carts",
        localField: "artwork",
        foreignField: "artwork",
        as: "cartlist",
      },
    },
    {
      $unwind: {
        path: "$cartlist",
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ["$$ROOT", "$cartlist"],
        },
      },
    },
    {
      $project: {
        user: 1,
      },
    },
    {
      $match: {
        user: {
          $ne: mongoose.Types.ObjectId(req.body.user),
        },
      },
    },
    {
      $lookup: {
        from: "carts",
        localField: "user",
        foreignField: "user",
        as: "cartlist2",
      },
    },
    {
      $unwind: {
        path: "$cartlist2",
      },
    },
    {
      $match: {
        "cartlist2.artwork": {
          $ne: mongoose.Types.ObjectId(req.body.artwork),
        },
      },
    },
    {
      $project: {
        user: 0,
        _id: 0,
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ["$$ROOT", "$cartlist2"],
        },
      },
    },
    {
      $project: {
        artwork: 1,
        _id: 0,
      },
    },
    {
      $group: {
        _id: "Null",
        artwork: {
          $addToSet: "$artwork",
        },
      },
    },
    {
      $unwind: {
        path: "$artwork",
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $lookup: {
        from: "artworks",
        localField: "artwork",
        foreignField: "_id",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ["$$ROOT", "$result"],
        },
      },
    },
    {
      $project: {
        artwork: 0,
        result: 0,
      },
    },
  ];
  const aggCursor = await cart.aggregate(pipeline);

  res.status(200).json(aggCursor);
};
