import { Router } from "express";
import {
  createProfile,

  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController";

const router = Router();

router.post("/", createProfile);
router.get("/:id", getProfileById);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
