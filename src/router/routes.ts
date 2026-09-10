import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: async () => import("layouts/HomeLayout.vue"),
		children: [{ path: "", component: async () => import("pages/HomePage.vue") }],
	},
	{
		path: "/:catchAll(.*)*",
		component: async () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
