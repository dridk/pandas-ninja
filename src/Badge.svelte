<script lang="ts">
	const COLORS = {
		easy: "bg-green-500",
		medium: "bg-orange-500",
		hard: "bg-red-500",
	};

	export let level: string;

	$: bgColor = COLORS[level];
</script>

<div class="text-xs {bgColor} text-white rounded  px-2 py-1 h-fit text-center">
	{level}
</div>
