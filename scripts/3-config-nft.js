import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x92d1cC1053879aFf58e5a9335efE188FAfbCAdE2");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Peace Symbol",
        description: "This NFT will give you access to UkraineDAO!",
        image: readFileSync("scripts/assets/peacemaker.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();