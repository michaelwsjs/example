import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.ts";
import config from "@/config/index.ts";

const router = createRouter({
  history: createWebHistory(config.VITE_APP_PATH_URL),
  routes: routes as any
});

router.beforeEach((_to, _from, next) => {
  next();
});

export default router;
