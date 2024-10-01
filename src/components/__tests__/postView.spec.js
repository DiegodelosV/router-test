// import { describe, it, expect } from 'vitest'

import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import PostsView from "../PostsView.vue";
import { describe } from "vitest";

describe("PostsView", () => {
  test("Probando la existencia del componente o vista PostsView", async () => {

    // crear el router con el historial y las rutas
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/posts",
          name: "posts",
          component: PostsView,
        },
      ],
    });
    // redireccionar al post y declaramos con await si esta listo
    router.push("/posts");
    await router.isReady();

  // seleccionar el componente
    const wrapper = mount(PostsView, {
      global: {
        plugins: [router],
      },
    });

    //asercion de existencia del componente "findComponent": buscar el componente, "exists": si existe y "toBe": que sea verdadero
    expect(wrapper.findComponent(PostsView).exists()).toBe(true);
  });
});
