import { Router, Request, Response } from "express";

const router = Router();

// Temporary in-memory store
let profiles: any[] = [];
let idCounter = 1;

// POST - create profile
router.post("/", (req: Request, res: Response) => {
  const newProfile = { id: idCounter++, ...req.body };
  profiles.push(newProfile);
  res.status(201).json(newProfile);
});

// GET - all profiles
router.get("/", (req: Request, res: Response) => {
  res.json(profiles);
});

// GET - single profile
router.get("/:id", (req: Request, res: Response) => {
  const profile = profiles.find((p) => p.id === parseInt(req.params.id));
  if (!profile) return res.status(404).json({ message: "Profile not found" });
  res.json(profile);
});

// PUT - update profile
router.put("/:id", (req: Request, res: Response) => {
  const index = profiles.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Profile not found" });

  profiles[index] = { ...profiles[index], ...req.body };
  res.json(profiles[index]);
});

// DELETE - delete profile
router.delete("/:id", (req: Request, res: Response) => {
  profiles = profiles.filter((p) => p.id !== parseInt(req.params.id));
  res.json({ message: "Profile deleted" });
});

export default router;
