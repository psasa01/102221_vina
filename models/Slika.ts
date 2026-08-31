import mongoose, { Schema } from "mongoose";
const slikaSchema = new Schema({ opis: String, thumb: String, big: String }, { collection: "slikas" });
export const Slika = mongoose.models.Slika ?? mongoose.model("Slika", slikaSchema);
