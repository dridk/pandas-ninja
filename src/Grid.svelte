<script lang="ts">
	import { Split, DefaultSplitter } from "@geoffcox/svelte-splitter";

	let splitter_size = "2px";
	let splitter_color = "hsl(var(--b3))";
	let splitter_active_color = "hsl(var(--p))";
</script>

<div class="wrapper ">
	<Split splitterSize={splitter_size}>
		<svelte:fragment slot="primary">
			<Split
				horizontal
				splitterSize={splitter_size}
				initialPrimarySize="70%"
			>
				<div slot="primary" class="h-full">
					<!-- First cell  -->

					<slot name="a" />
				</div>

				<svelte:fragment slot="splitter">
					<DefaultSplitter
						color={splitter_color}
						hoverColor={splitter_active_color}
						dragColor={splitter_active_color}
					/>
				</svelte:fragment>

				<div slot="secondary" class="h-full">
					<!-- Second cell  -->

					<slot name="b" />
				</div>
			</Split>
		</svelte:fragment>

		<svelte:fragment slot="splitter">
			<DefaultSplitter
				initialPrimarySize="70%"
				color={splitter_color}
				hoverColor={splitter_active_color}
				dragColor={splitter_active_color}
			/>
		</svelte:fragment>

		<svelte:fragment slot="secondary">
			<Split horizontal splitterSize={splitter_size}>
				<div slot="primary" class="h-full">
					<!-- Third cell  -->

					<slot name="c" />
				</div>

				<svelte:fragment slot="splitter">
					<DefaultSplitter
						color={splitter_color}
						hoverColor={splitter_active_color}
						dragColor={splitter_active_color}
					/>
				</svelte:fragment>

				<div slot="secondary" class="h-full">
					<!-- Fourth cell  -->

					<slot name="d" />
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
