import mongoose, { Schema } from "mongoose";
const odgovorSchema = new Schema({ body: { type: String, required: true }, ime: String, avatar: String, korisnik: String, datum: { type: Date, default: Date.now } });
const postSchema = new Schema({ naslov: { type: String, required: true }, sadrzaj: { type: String, required: true }, pokrenuo: { type: Schema.Types.ObjectId, ref: "User", required: true }, ime: String, avatar: String, datum: { type: Date, default: Date.now }, odgovor: [odgovorSchema] }, { collection: "posts" });
export const Post = mongoose.models.Post ?? mongoose.model("Post", postSchema);
