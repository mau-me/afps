import mongoose from "mongoose";

const atletaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  contato: { type: String },
});

const atletas = mongoose.model("atletas", atletaSchema);

export default atletas;
