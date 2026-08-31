import mongoose, { Schema, type InferSchemaType } from "mongoose";

const vinoSchema = new Schema({
  naziv: { type: String, required: true, trim: true },
  slug: String,
  slugZemlja: String,
  godina: Number,
  proizvodjac: { type: String, required: true, trim: true },
  vrsta: { type: String, required: true, trim: true },
  zemlja: { type: String, required: true, trim: true },
  slika: String,
  alkohol: String,
  velicina: String,
  datum: { type: Date, default: Date.now },
  korisnik: { type: Schema.Types.ObjectId, ref: "User", required: true },
  ime: String,
}, { collection: "vinos" });

export type VinoDocument = InferSchemaType<typeof vinoSchema> & { _id: mongoose.Types.ObjectId };
export const Vino = mongoose.models.Vino ?? mongoose.model("Vino", vinoSchema);
