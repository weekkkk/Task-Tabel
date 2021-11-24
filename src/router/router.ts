import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import RemoveAndEditRow from "@/pages/RemoveAndEditRow.vue";
import TablePage from "@/pages/TablePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/removeandeditrow",
    component: RemoveAndEditRow,
  },
  {
    path: "/",
    component: TablePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;