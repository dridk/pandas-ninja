
<script>
  
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


<div class="tabs ">
  <a class="tab tab-lifted w-1/3">Easy</a> 
  <a class="tab tab-lifted tab-active w-1/3">Medium</a> 
  <a class="tab tab-lifted w-1/3">Hard</a>
</div>

<ul class="menu bg-base-100 w-56 mt-5">
  <li>
    <div >
      {@html ICON_ON}
      <div>
      <a class="text-slate-100 "> Challenge 1</a>
      <p class="text-xs text-slate-400">Sort values by keywords</p>  
      </div>
    </div>

</li>


  <li><a>{@html ICON_OFF} Challenge 2</a></li>
  <li><a>{@html ICON_OFF} Challenge 3</a></li>
</ul>
  
</div>



</div>