<template>
	<div class="diagonal-container" :style="containerStyle">
		<div class="background-slot">
			<slot name="background" />
		</div>
		<div class="diagonal-overlay" :style="overlayStyle" />
		<div class="content-slot" :class="{ 'content-left': isLeft, 'content-right': !isLeft }">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup lang="ts">
defineComponent({
	name: "DiagonalSlice",
});
import { computed, defineComponent } from "vue";

const props = defineProps({
	side: {
		type: String,
		default: "left",
		validator: (value: string) => ["left", "right"].includes(value),
	},
	topClip: {
		type: Number,
		default: 50,
	},
	bottomClip: {
		type: Number,
		default: 50,
	},
	minHeight: {
		type: String,
		default: "400px",
	},
});

const isLeft = computed(() => props.side === "left");

const showDiagonal = computed(() => {
	return !window.matchMedia("(max-width: 600px)").matches;
});

const containerStyle = computed(() => ({
	minHeight: props.minHeight,
}));

const overlayStyle = computed(() => {
	if (!showDiagonal.value) {
		return {
			background: "rgba(0, 0, 0, 0.7)",
			clipPath: "none",
		};
	}

	const clipPath = isLeft.value
		? `polygon(0 0, ${props.topClip}% 0, ${props.bottomClip}% 100%, 0 100%)`
		: `polygon(${props.topClip}% 0, 100% 0, 100% 100%, ${props.bottomClip}% 100%)`;

	return { clipPath };
});
</script>

<style scoped>
.background-slot {
	position: absolute;
	width: 100%;
	height: 100%;
}

.diagonal-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: black;
	z-index: 1;
}

.diagonal-container {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}

.content-slot {
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	height: 100%;
}

@media (max-width: 600px) {
	.content-slot {
		margin: 0 !important;
		justify-content: center;
		text-align: center;
		padding: 0 20px;
	}
}

.content-left {
	margin-right: 50%;
}

.content-right {
	margin-left: 50%;
}
</style>
