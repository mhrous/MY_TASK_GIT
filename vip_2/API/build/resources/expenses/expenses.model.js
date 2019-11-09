"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exponsesSchema = new _mongoose.default.Schema({
  driver: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  car: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "car",
    required: true
  },
  _onCar: {
    type: Boolean,
    default: false
  },
  _onDriver: {
    type: Boolean,
    default: false
  },
  _onPartner: {
    type: Boolean,
    default: true
  },
  partner: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "user"
  },
  amount: {
    type: Number,
    required: true
  },
  _for: {
    type: String,
    deflate: ""
  },
  date: {
    type: Date,
    required: true
  }
});
exponsesSchema.index({
  date: 1
});

var _default = _mongoose.default.model("exponses", exponsesSchema);

exports.default = _default;