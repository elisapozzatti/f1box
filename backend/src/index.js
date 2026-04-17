import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import fs from "fs";
import { dbClient } from "./lib/db.js";
import { config } from "./config/config.js";
import driversRoute from "./route/drivers.js";
import teamsRoute from "./route/teams.js";
import circuitsRoute from "./route/circuits.js";

dbClient();
const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin: (ctx) => {
      const allowed = [
        "https://f1box-frontend-2.vercel.app",
        "https://f1box-frontend-2-git-main-elisapozzattis-projects.vercel.app",
      ];

      const origin = ctx.request.header.origin;

      if (allowed.includes(origin)) {
        return origin;
      }

      return "";
    },
  }),
);

// Rotta di test
router.get("/", (ctx) => {
  ctx.body = "Server running!";
});

app.use(router.routes()).use(router.allowedMethods());

app.use(driversRoute.routes()).use(driversRoute.allowedMethods());
app.use(teamsRoute.routes()).use(teamsRoute.allowedMethods());
app.use(circuitsRoute.routes()).use(circuitsRoute.allowedMethods());

const PORT = process.env.PORT || config.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
