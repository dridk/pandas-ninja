<script lang="ts">
  import ToolBar from "./ToolBar.svelte";
  import Clipboard from "svelte-clipboard";
  export let title: string = "Noname";
  export let data = [];

  let data_text: string = "sacha";

  $: headers = data.length > 0 ? Object.keys(data[0]) : [];

  //====================================

  function ConvertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";

    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += "\t";

        line += array[i][index];
      }

      str += line + "\r\n";
    }

    return str;
  }

  // ==================================
</script>

<ToolBar>
  <div class="flex justify-between items-center h-full p-4">
    <h2>{title}</h2>

    <Clipboard
      text={ConvertToCSV(data)}
      let:copy
      on:copy={() => {
        console.log("copied");
      }}
    >
      <button on:click={copy} class="btn btn-sm btn-square btn-ghost">
        <svg style="width:16px;height:16px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z"
          />
        </svg>
      </button>
    </Clipboard>
  </div>
</ToolBar>

<div class="overflow-x-auto overflow-y-auto h-full">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        {#each headers as name, i}
          <th class="normal-case"> {name} </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each data as item, index}
        <tr>
          {#each headers as name, index}
            <td>{item[name]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div id="clipboard" />
