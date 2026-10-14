import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  ime: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  zadnjiPutVidjen: Date,
  google: { id: String, name: String, token: String },
  facebook: { id: String, token: String, ime: String },
  slika: { type: String, default: "" },
  level: { type: Number, default: 30 },
  reg: { type: String, default: "ne" },
  brojVina: { type: Number, default: 0 },
  registrovan: { type: Date, default: Date.now },
  secretToken: String,
  active: { type: Boolean, default: false },
  resetPasswordToken: { type: String, default: "" },
  resetPasswordExpire: Date,
  hash: String,
  salt: String,
}, { collection: "users" });

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
