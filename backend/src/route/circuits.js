import Router from "@koa/router";
import circuitSchema from "../models/circuits.js";

const router = new Router({
  prefix: "/api/circuits",
});

//get tutti i circuiti
router.get("/", async (ctx) => {
  try {
    const circuits = await circuitSchema.find();
    ctx.body = circuits;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get nome circuito
router.get("/", async (ctx) => {
  try {
    const circuitName = await circuitSchema.find({}, { nome: 1, _id: 0 });
    ctx.status = 200;
    ctx.body = circuitName;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

//get coordinate circuito
router.get("/", async (ctx) => {
  try {
    const circuitCoords = await circuitSchema.find({}, { coords: 1, _id: 0 });
    ctx.status = 200;
    ctx.body = circuitCoords;
  } catch (error) {
    ctx.status = 404;
    ctx.body = { error: "Errore nel trovare i dati" };
  }
});

export default router;
