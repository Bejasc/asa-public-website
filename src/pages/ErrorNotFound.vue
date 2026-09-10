<template>
	<q-page class="flex flex-center column q-gutter-md">
		<div class="text-h2 text-bold">404</div>
		<div class="text-h5">This page could not be found.</div>
		<q-btn flat label="Home" :ripple="false" to="/" />
	</q-page>
</template>

<script setup lang="ts">
defineOptions({
	name: "ErrorNotFound",
});
</script>
