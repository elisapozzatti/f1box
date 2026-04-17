import Router from "@koa/router";
import driverSchema from "../models/drivers.js";

const router = new Router({
  prefix: "/api/drivers",
});

//get tutti i piloti
router.get("/", async (ctx) => {
  try {
    const drivers = await driverSchema.find();
    ctx.status = 200;
    ctx.body = drivers;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get piloti attivi in f1
router.get("/now", async (ctx) => {
  try {
    const drivers = await driverSchema.find({ last_season: "" });
    ctx.status = 200;
    ctx.body = drivers;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get piloti campionati del mondo
router.get("/worldtitles", async (ctx) => {
  let drivers;
  const wt = ctx.query.world_titles;
  try {
    if (!wt) {
      ctx.status = 404;
      ctx.body = { error: "Errore nel trovare i dati" };
      return;
    }
    if (wt === "0") {
      drivers = await driverSchema.find({ world_titles: 0 });
    } else if (wt === "max") {
      let max = 0;
      const driversList = await driverSchema.find();
      driversList.forEach((driver) => {
        if (driver.world_titles != null && driver.world_titles > max) {
          max = driver.world_titles;
        }
      });
      drivers = await driverSchema.find({ world_titles: max });
    } else if (wt === "5") {
      drivers = await driverSchema.find({ world_titles: { $gt: 5 } });
    } else if (wt === "3") {
      drivers = await driverSchema.find({ world_titles: { $gt: 3 } });
    } else if (wt === "1") {
      drivers = await driverSchema.find({ world_titles: { $gt: 1 } });
    }
    ctx.status = 200;
    ctx.body = drivers;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get vittorie piloti
router.get("/wins", async (ctx) => {
  let drivers;
  const wt = ctx.query.career_wins;
  try {
    if (!wt) {
      ctx.status = 404;
      ctx.body = { error: "Errore nel trovare i dati" };
      return;
    }
    if (wt === "1") {
      drivers = await driverSchema.find({ career_wins: 1 });
    } else if (wt === "max") {
      let max = 0;
      const driversList = await driverSchema.find();
      driversList.forEach((driver) => {
        if (driver.career_wins != null && driver.career_wins > max) {
          max = driver.career_wins;
        }
      });
      drivers = await driverSchema.find({ career_wins: max });
    } else if (wt === "50") {
      drivers = await driverSchema.find({ career_wins: { $gt: 50 } });
    } else if (wt === "10") {
      drivers = await driverSchema.find({ career_wins: { $gt: 30 } });
    }
    ctx.status = 200;
    ctx.body = drivers;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

export default router;
