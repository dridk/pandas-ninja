<script lang="ts">
  import Badge from "./Badge.svelte";
  import Rating from "./Rating.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let code = "";
  export let title: string;
  export let level: string;
  export let rating: number;
  export let index: number;

  function getRating(filename: string): number {
    let value = localStorage.getItem(filename) ?? "-1";
    console.debug("RATINGLA", value, filename);
    return parseInt(value);
  }

  function emit_left_clicked(event) {
    dispatch("left", {});
  }

  function emit_right_clicked(event) {
    dispatch("right", {});
  }

  function emit_menu_clicked(event) {
    dispatch("menu", {});
  }
</script>

<div class="navbar bg-white border-b border-b-base-300 flex justify-between ">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <img src="shuriken.svg" width="35px" alt="" />
    </button>

    <div class="flex-1 ">
      <a href={null} class="flex text-black normal-case text-xl">
        <h1 class="font-extrabold">PANDAS</h1>
        <h1 class="font-light ml-1">Ninja</h1>
      </a>
    </div>
  </div>

  <div class="flex  flex-col ">
    <div class="flex flex-row gap-x-2 items-center">
      <h1 class="text-xl ml-12 uppercase text-base-300 font-semibold">
        {title}
      </h1>
      <Badge {level} />
    </div>
    <Rating size={20} score={rating} />
  </div>

  <div class="flex-none  ">
    <button on:click={emit_left_clicked} class="btn btn-square btn-ghost">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
        />
      </svg>
    </button>

    <button on:click={emit_menu_clicked} class="btn btn-outline btn-primary"
      >Challenge {index + 1}</button
    >

    <button on:click={emit_right_clicked} class="btn btn-square btn-ghost ">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z"
        />
      </svg>
    </button>

    <a
      class="btn btn-square btn-ghost"
      href="https://github.com/dridk/pandas-ninja/discussions"
    >
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"
        />
      </svg>
    </a>

    <a
      href="https://github.com/dridk/pandas-ninja"
      class="btn btn-square btn-ghost"
    >
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </a>
  </div>
</div>
