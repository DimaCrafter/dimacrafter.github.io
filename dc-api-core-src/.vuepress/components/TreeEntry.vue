<template>
	<div class="tree-entry">
		<i v-if="line" :style="{ height: line + 'px' }"></i>
		<div class="line">
			<Icon :name="data.icon" />
			{{ data.name }}
		</div>
		<div class="childs" v-if="data.childs">
			<TreeEntry v-for="entry in data.childs" :key="entry.name" :data="entry" />
		</div>
	</div>
</template>

<script>
import { countLine } from './Tree'
export default {
	props: {
		data: Object
	},
	computed: {
		line () {
			return this.data.childs ? countLine(this.data.childs, true) : 0;
		}
	}
}
</script>
