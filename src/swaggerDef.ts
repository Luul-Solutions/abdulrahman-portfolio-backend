// src/swagger.ts
import { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Profile API",
      version: "1.0.0",
      description: "API for managing user profiles",
    },
    servers: [{ url: "http://localhost:5001", description: "Local server" }],
    components: {
      schemas: {
        Profile: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            bio: { type: "string" },
            location: { type: "string" },
            nationality: { type: "string" },
            availability: { type: "string" },
            dateOfBrith: { type: "string", format: "date" },
            email: { type: "string" },
            phone: { type: "string" },
            address: { type: "string" },
            github: { type: "string" },
            twitter: { type: "string" },
            linkedin: { type: "string" },
            expectedSalary: { type: "number" },
            ownACar: { type: "boolean" },
            haveDrivingLicense: { type: "boolean" },
            noticePeriod: { type: "string" },
            ImmigrationStatus: { type: "string" },
            referees: { type: "array", items: { type: "object" } },
            willingToRelocate: { type: "boolean" },
            languages: { type: "array", items: { type: "string" } },
            skills: { type: "array", items: { type: "string" } },
          },
        },
        ProfileInput: {
          type: "object",
          required: ["name", "email"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            bio: { type: "string" },
            location: { type: "string" },
            nationality: { type: "string" },
            availability: { type: "string" },
            dateOfBrith: { type: "string", format: "date" },
            phone: { type: "string" },
            address: { type: "string" },
            github: { type: "string" },
            twitter: { type: "string" },
            linkedin: { type: "string" },
            expectedSalary: { type: "number" },
            ownACar: { type: "boolean" },
            haveDrivingLicense: { type: "boolean" },
            noticePeriod: { type: "string" },
            ImmigrationStatus: { type: "string" },
            referees: { type: "array", items: { type: "object" } },
            willingToRelocate: { type: "boolean" },
            languages: { type: "array", items: { type: "string" } },
            skills: { type: "array", items: { type: "string" } },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: { message: { type: "string" } },
        },
      },
    },
    paths: {
      "/profiles": {
        post: {
          summary: "Create a new profile",
          tags: ["Profiles"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProfileInput" },
              },
            },
          },
          responses: {
            "201": {
              description: "Profile created",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Profile" },
                },
              },
            },
            "500": {
              description: "Failed to create profile",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        get: {
          summary: "Get all profiles",
          tags: ["Profiles"],
          responses: {
            "200": {
              description: "List of profiles",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Profile" },
                  },
                },
              },
            },
            "500": {
              description: "Failed to fetch profiles",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/profiles/{id}": {
        get: {
          summary: "Get profile by ID",
          tags: ["Profiles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            "200": {
              description: "Profile found",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Profile" },
                },
              },
            },
            "404": {
              description: "Profile not found",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
            "500": {
              description: "Failed to fetch profile",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        put: {
          summary: "Update profile by ID",
          tags: ["Profiles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProfileInput" },
              },
            },
          },
          responses: {
            "200": {
              description: "Profile updated",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Profile" },
                },
              },
            },
            "404": {
              description: "Profile not found",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
            "500": {
              description: "Failed to update profile",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        delete: {
          summary: "Delete profile by ID",
          tags: ["Profiles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            "200": {
              description: "Profile deleted",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: { message: { type: "string" } },
                  },
                },
              },
            },
            "404": {
              description: "Profile not found",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
            "500": {
              description: "Failed to delete profile",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export default swaggerOptions;
