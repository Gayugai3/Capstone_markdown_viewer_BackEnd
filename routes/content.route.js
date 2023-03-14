import express from "express";
import {
  mduser,
  saveContent,
  updateContent,
} from "../services/content.service.js";

const router = express.Router();

router.post("/save/:email", async function (request, response) {
  try {
    const { email } = request.params;
    const { data } = request.body;
    
    console.log(data, email);

    const userfromDB = await mduser(email);

    if (userfromDB) {
      const updateData = await updateContent(email, data);
      if (updateData) {
        response.json({ message: "Content updated Successfully" });
      } else {
        response.json({ message: "Something went wrong" });
      }
    } else {
      const result = await saveContent(email, data);
      if (result) {
        response.json({ message: "Saved Successfully" });
      } else {
        response.json({ message: "Something went wrong" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
