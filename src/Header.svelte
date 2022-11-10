
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let code = ""
  export let loading = false;
  export let title = "Sort by value by first column";
  export let level = "unknown";

  function emit_left_clicked(event) {
    dispatch('left', {});
  }

  function emit_right_clicked(event) {
    dispatch('right', {});
  }
  
</script>

<div class="navbar bg-white border-b border-b-base-300 flex justify-between ">

  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
     <svg style="width:40px;height:40px" viewBox="0 0 24 24">
      <path fill="black" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z" />
    </svg>
  </button>

  <div class="flex-1 ">
    <a class="btn btn-ghost text-black normal-case text-xl">

      <h1>PANDAS</h1>
      <h1 class="font-light ml-1">Ninja</h1>
    </a>
  </div>

</div>


{#if loading}
<h2 class="text-base font-medium">Loading ...</h2>

{:else}

<div class="flex gap-2">
  <h1 class="text-2xl text-base-300 font-light">{title}</h1>
  <p>({level})</p>
</div>


{/if}





<div class="flex-none  ">
  <button on:click = {emit_left_clicked} class="btn btn-square btn-ghost">

    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="black" d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" />
    </svg>

  </button>


  <slot></slot>



  <button on:click = {emit_right_clicked} class="btn btn-square btn-ghost ">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="black" d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
    </svg>
  </button>


  <button class="btn btn-square btn-ghost">

    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="black" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
    </svg>
  </button>


</div>
</div>