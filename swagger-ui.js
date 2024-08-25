import express from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger.js";

const router = express.Router();

router.use("/", swaggerUi.serve);
router.get(
  "/",
  swaggerUi.setup(specs, {
    explorer: true,
    customJs: [
      "/swagger-ui-bundle.js",
      "/swagger-ui-standalone-preset.js"
    ],
    customCss: "/swagger-ui.min.css",
  })
);

export default router;