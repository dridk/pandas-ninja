<script lang="ts">

import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter"

let splitter_size = "2px";
let splitter_color = "#3C404C";
let splitter_active_color = "blue";

</script>



<div class="wrapper">

	<Split splitterSize={splitter_size}>

		<svelte:fragment slot="primary">
			<Split horizontal splitterSize={splitter_size} >
				<div slot="primary" class="h-full">

					<!-- First cell  -->

					<slot name="a"></slot>

				</div>


				<svelte:fragment slot="splitter">
					<DefaultSplitter color={splitter_color} hoverColor={splitter_active_color} dragColor={splitter_active_color} />
				</svelte:fragment>


				<div slot="secondary" class="h-full">

					<!-- Second cell  -->

					<slot name="b"></slot>

				</div>
			</Split>
		</svelte:fragment>  

		<svelte:fragment slot="splitter">
			<DefaultSplitter color={splitter_color} hoverColor={splitter_active_color} dragColor={splitter_active_color} />
		</svelte:fragment>

		<svelte:fragment slot="secondary">
			<Split horizontal splitterSize={splitter_size} >
				<div slot="primary" class="h-full">

					<!-- Third cell  -->

					<slot name="c"></slot>


				</div>

				<svelte:fragment slot="splitter">
					<DefaultSplitter color={splitter_color} hoverColor={splitter_active_color} dragColor={splitter_active_color} />
				</svelte:fragment>

				<div slot="secondary" class="h-full">

					<!-- Fourth cell  -->

					<slot name="d"></slot>

				</div>
			</Split>
		</svelte:fragment>

	</Split>




</div>


<style>
	.wrapper {

		height: 90vh;

	}
</style>