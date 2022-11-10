<script lang="ts">
	export let level: string;

	$: COLORS = {
		easy: "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-green-200 text-green-900 text text-center   ",
		medium: "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-yellow-200 text-yellow-900 text text-center  ",
		hard: "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-red-200 text-red-900 text text-center  ",
	};

	let classname = function getColor(level: string): string {
		return COLORS[level];
	};
</script>

<span class={COLORS[level]}>
	{level}
</span>
