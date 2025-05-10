import Bid from "../models/bid.model.js";
import createError from "../utils/createError.js";

export const createBid = async (req, res, next) => {
  try {
    const newBid = new Bid({
      gigId: req.body.gigId,
      userId: req.userId, // from verifyToken
      amount: req.body.amount,
      message: req.body.message,
    });

    const savedBid = await newBid.save();
    res.status(201).json(savedBid);
  } catch (err) {
    next(err);
  }
};

export const getBidsForGig = async (req, res, next) => {
  try {
    const bids = await Bid.find({ gigId: req.params.gigId }).populate("userId", "username");
    res.status(200).json(bids);
  } catch (err) {
    next(err);
  }
};
