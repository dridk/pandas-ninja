
<script>

  export let level_filter = "easy";
  export let challenges = [];
  export let current_index;


  $: levels = ["easy","medium", "hard"]

  const ICON_OFF = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
  </svg>`;

  const ICON_ON = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
  <path fill="#25AC47" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
  </svg>`;


</script>

<div class="drawer-side">


  <label for="my-drawer-4" class="drawer-overlay"></label>


  <div class="menu bg-base-100 w-80 p-2 ">


    <div class="tabs tabs-boxed ">

      {#each levels as level}

      <a on:click = {()=>level_filter = level} class="tab tab-lifted {level_filter === level ? 'tab-active' : ''} w-1/3">{level}</a> 

      {/each}


    </div>

    <ul class="menu bg-base-100 w-full mt-5 ">

      {#each challenges as {title, file,level }, i}

      {#if level_filter ==level}

      <li>
        <a on:click={()=>current_index = i} class="{current_index == i ? "active" : ""} flex justify-between">
          <div class="flex gap-3 ">
            {@html ICON_ON} 
            <div>
              <a class="text-slate-100 "> Challenge {i+1}</a> 
              <p class="text-xs text-slate-400">{title}</p>  
            </div>
          </div>
          <div class="badge badge-secondary">{level}</div>
        </a>

      </li>

      {/if}

      {/each}

    </ul>

  </div>



</div>