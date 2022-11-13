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

<div
  class="navbar bg-primary-content border-b border-b-base-300 flex justify-between "
>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg viewBox="0 0 1000 1000" style="width:40px;height:40px">
        <g
          ><g
            ><path
              fill="hsl(var(--nf))"
              d="M949,959.3c-119.5-47.5-225.5-149.8-243.1-282c-1-7.4,4.8-17.4,12.4-22.4c4.5-3,9.1-5.9,13.8-9c23.9-14.9,46.3-35.1,69.1-54c21.5-21.4,43.5-42.1,62.1-66.6C940.8,423.1,997,289,989.3,157.7c-1.8-30.3-7-60.4-16.1-90c-1.7-6.2-3.2-11.5-4.5-16c-2.5-8.9-7.2-9.2-10.5-0.7c-1.7,4.3-3.7,9.4-6.1,15.3c-3.4,9.6-8.7,20.8-15.6,33.2C894.1,174,776,321.1,672.8,293.8c-25-6.6-40.8-45.2-56.1-64.4c-45-56.5-100.6-105.5-162.8-142.2C343.5,22.3,192-12,66.6,26.7c-6.2,1.7-11.5,3.2-16,4.5c-10.1,2.8-16,4.5-16,4.5s11.1,4.4,30.6,12.1c9.6,3.5,20.8,8.7,33.2,15.7c54.1,30.7,101.2,68,137.5,119.3c30.7,43.5,92.9,133.6,30.8,172.2C119.3,446.6,2.9,635.1,10.3,812.6c0.4,10.6,0.9,20.8,1.3,30.6c0.4,19.2,3.3,36.7,5.8,51.8c2,15.1,4.9,27.8,8.1,38.3c1.7,6.2,3.2,11.5,4.5,16c2.5,8.9,7.2,9.2,10.5,0.7c1.7-4.3,3.7-9.4,6.1-15.3c3.5-9.6,8.7-20.9,15.7-33.2c6.5-12.4,13.6-26,23.7-39.7c33-44.6,73-84.9,120.8-113.5c25.2-15.2,114.6-64.9,138-28.9c91.4,140.2,231,237.2,396.9,264.4c12.5,2,24.6,3.6,36.6,3.9c11.3,0.6,22.4,1.2,33,1.8c10.6-0.5,20.8-0.9,30.7-1.3c19.2-0.4,36.7-3.3,51.8-5.8c15.1-2,27.8-4.9,38.3-8.1c6.2-1.7,11.6-3.2,16-4.5C957,967.4,957.3,962.7,949,959.3z M499.3,596.5c-51.3,0-92.9-40.5-95.5-91.2c-0.1-1.6-0.5-3.2-0.5-4.8c0-53,43-96,96-96c51.4,0,92.9,40.4,95.5,91.2c0.1,1.6,0.5,3.2,0.5,4.8C595.3,553.6,552.3,596.5,499.3,596.5z"
            /></g
          ><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g
          /><g /></g
        ></svg
      >
    </button>

    <div class="flex-1 ">
      <a href={null} class="flex text-neutral normal-case text-xl">
        <h1 class="font-extrabold">PANDAS</h1>
        <h1 class="font-light ml-1">Ninja</h1>
      </a>
    </div>
  </div>

  <div class="flex flex-col ">
    <div class="flex flex-row gap-x-2 items-center">
      <h1
        class="text-neutral-focus text-xl ml-12 uppercase text-base-300 font-semibold"
      >
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
          fill="hsl(var(--nf))"
          d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
        />
      </svg>
    </button>

    <button on:click={emit_menu_clicked} class="btn btn-primary"
      >Challenge {index + 1}</button
    >

    <button on:click={emit_right_clicked} class="btn btn-square btn-ghost ">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="hsl(var(--nf))"
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
          fill="hsl(var(--nf))"
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
          fill="hsl(var(--nf))"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </a>
  </div>
</div>
