// src/controllers/profile.controller.ts
import { Request, Response } from "express";
import { Profile } from "../models/Profile";

// CREATE profile
export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Failed to create profile" });
  }
};

// GET all profiles
export const getAllProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Failed to fetch profiles" });
  }
};

// GET profile by ID
export const getProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

// UPDATE profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Profile.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const updatedProfile = await Profile.findByPk(id);
    res.json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

// DELETE profile
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Profile.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Failed to delete profile" });
  }
};
