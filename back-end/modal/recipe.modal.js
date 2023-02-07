const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    anotherName: {
      type: String,
    },
    items: [String],
    steps: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = RecipeModal = model("recipe", recipeSchema);
