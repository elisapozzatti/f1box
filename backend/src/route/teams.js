import Router from "@koa/router";
import teamSchema from "../models/teams.js";
import teams from "../models/teams.js";
import drivers from "../models/drivers.js";
import driverSchema from "../models/drivers.js";

const router = new Router({
  prefix: "/api/teams",
});

//get tutte le scuderie
router.get("/", async (ctx) => {
  try {
    const teams = await teamSchema.find();
    ctx.status = 200;
    ctx.body = teams;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get tutti nomi delle scuderie
router.get("/name", async (ctx) => {
  try {
    const teams = await teamSchema.find({}, "name");
    ctx.status = 200;
    ctx.body = teams;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get piloti di una specifica scuderia
router.get("/teamdrivers", async (ctx) => {
  let drivers = ctx.body;
  try {
    const teamName = ctx.query.team;
    if (!teamName || teamName === "Tutte le scuderie") {
      drivers = await driverSchema.find();
    } else {
      drivers = await driverSchema.find({
        team: { $regex: teamName, $options: "i" },
      });
    }
    ctx.status = 200;
    ctx.body = drivers;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

export default router;
