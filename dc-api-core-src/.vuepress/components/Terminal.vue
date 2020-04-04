<template>
	<div class="terminal" v-html="rendered" />
</template>

<script>
export default {
	methods: {
		getText (vnode) {
			if (vnode.text) return vnode.text;
			else return this.getText(vnode.children[0]);
		}
	},
	computed: {
		rendered () {
			let text = this.getText(this.$slots.default[0]);
			text = text.replace(/\[(#[a-f0-9]+)](.*?)\[\/#]/g, (_, color, value) => {
				return `<span style="color: ${color}">${value}</span>`;
			});
			return text;
		}
	}
}
</script>

<style>
.terminal {
    position: relative;
    background-color: #282c34;
    color: #fff;
    border-radius: 6px;
    padding: 1.25rem 1.5rem;
    margin: 0.85rem 0;
	line-height: 1.25;
	white-space: pre-wrap;
}

.terminal:before {
    content: 'bash';
    position: absolute;
    top: 0.8em;
    right: 1em;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.4);
}

.theme-default-content code {
    white-space: nowrap;
}

code[class*="language-"], pre[class*="language-"], .terminal {
    font-family: 'Ubuntu Mono derivative Powerline', 'Ubuntu Mono', source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
</style>
