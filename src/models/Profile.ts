import { DataTypes, Model, CreationOptional } from "sequelize";
import { sequelize } from "../config/database";

export class Profile extends Model {
  declare id: CreationOptional<number>;
  declare name: string;
  declare bio: string | null;
  declare location: string | null;
  declare nationality: string | null;
  declare availability: string | null;
  declare dateOfBrith: string | null;
  declare email: string;
  declare phone: string | null;
  declare address: string | null;
  declare github: string | null;
  declare twitter: string | null;
  declare linkedin: string | null;
  declare expectedSalary: number | null;
  declare ownACar: boolean | null;
  declare haveDrivingLicense: boolean | null;
  declare noticePeriod: string | null;
  declare ImmigrationStatus: string | null;
  declare referees: unknown | null;
  declare willingToRelocate: boolean | null;
  declare languages: unknown | null;
  declare skills: unknown | null;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    nationality: DataTypes.STRING,
    availability: DataTypes.STRING,
    dateOfBrith: DataTypes.DATEONLY,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    github: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    expectedSalary: DataTypes.DECIMAL,
    ownACar: DataTypes.BOOLEAN,
    haveDrivingLicense: DataTypes.BOOLEAN,
    noticePeriod: DataTypes.STRING,
    ImmigrationStatus: DataTypes.STRING,
    referees: DataTypes.JSON,
    willingToRelocate: DataTypes.BOOLEAN,
    languages: DataTypes.JSON,
    skills: DataTypes.JSON,
  },
  { sequelize, tableName: "profiles" }
);
