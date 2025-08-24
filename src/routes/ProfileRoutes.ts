import { Router } from "express";
import {
  createProfile,

  updateProfile,
  deleteProfile,
} from "../controllers/profileController";

const router = Router();

router.post("/profiles", createProfile);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

export default router;
