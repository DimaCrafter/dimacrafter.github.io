<template>
	<img :src="$withBase('/icons/' + name + '.svg')" class="icon" />
</template>

<script>
export default {
	props: {
		name: String
	}
}
</script>
