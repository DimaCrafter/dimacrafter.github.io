<template>
	<div class="tree">
		<i :style="{ height: line + 'px' }"></i>
		<div class="entries">
			<div class="line">
				<Icon :name="data.icon" />
				{{ data.name }}
			</div>
			<TreeEntry v-for="entry in data.childs" :key="entry.name" :data="entry" />
		</div>
		<div class="description">
			<div v-for="(item, i) in desc" :key="i" class="item">
				<template v-if="item">{{ item.text }}</template>
				<Badge v-if="item.tag" :text="item.tag" />
			</div>
		</div>
	</div>
</template>

<script>
export function countLine (childs, root = false) {
	let result = 0;
	for (let i = 0; i < childs.length; i++) {
		result++;
		if (root && i == childs.length - 1) break;
		if (childs[i].childs) result += countLine(childs[i].childs);
	}

	if (root) return (result - 1) * 27 + 12;
	else return result;
}

export default {
	props: {
		data: Object
	},
	methods: {
		getDesc (childs) {
			let result = [];
			for (const child of childs) {
				if (child.desc) result.push({ text: child.desc, tag: child.tag });
				else result.push(null);
				if (child.childs) result.push(...this.getDesc(child.childs));
			}
			return result;
		}
	},
	computed: {
		desc () {
			return this.getDesc(this.data.childs);
		},
		line () {
			if (this.data.childs) return countLine(this.data.childs, true);
			else return 0;
		}
	}
}
</script>

<style>
.tree {
	position: relative;
	display: flex;
	flex-direction: row;
    background-color: #282c34;
    border-radius: 6px;
    padding: 1.25rem 1.5rem;
    margin: 25px 0;
}

.tree > .description {
    display: flex;
    flex-direction: column;
    color: #ccc;
    padding-top: 25px;
}

.tree > .description > .item {
	display: flex;
	align-items: center;
    height: 22px;
    margin-top: 5px;
    font-size: 15px;
}

.tree > .description > .item > .badge {
	font-size: 13px;
    margin-left: 5px;
    border-radius: 12px;
}

.tree > .entries {
	position: relative;
	display: flex;
	flex-direction: column;
    flex: 1;
}

.tree-entry {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 25px;
}

.tree-entry:before {
    content: '';
    position: absolute;
    top: 10px;
    left: -15px;
    height: 1px;
    width: 10px;
    background-color: #fff;
    opacity: 0.5;
}

.tree > i,
.tree-entry > i {
    position: absolute;
    top: 25px;
    left: 10px;
    width: 1px;
    background-color: #fff;
    opacity: 0.5;
}

.tree > i {
    top: 48px;
    left: 34px;
}

.tree-entry > .line {
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 22px;
    color: #fff;
}

.tree > .entries > .line > img,
.tree-entry > .line > img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
}

.tree-entry > .line > .desc {
    margin-left: 25px;
    opacity: 0.65;
}

.tree-entry > .line > .badge {
    margin-left: 10px;
    font-size: 13px;
}
</style>
