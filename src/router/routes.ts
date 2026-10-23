import type { RouterType } from "@/types/index.ts";
const routes: RouterType[] = [
  {
    path: "/:catchAll(.*)",
    name: "All",
    title: "All",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    title: "Home",
    component: () => import("@/views/home/index.vue")
  }
];

export default routes;
