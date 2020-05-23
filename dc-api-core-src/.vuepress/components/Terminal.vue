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
::selection {
    background: rgba(0, 161, 255, 0.15);
}

#app div[class*="language-"] ::selection,
.terminal::selection, .terminal ::selection,
.tree ::selection {
    background: rgba(180, 220, 250, 0.125);
}

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

.theme-default-content :not(pre) > code {
    white-space: nowrap;
}

#app .token.string {
    color: #98c379;
}

#app .token.property {
    color: #e06c75;
}

#app .token.punctuation, #app .token.operator {
    color: #abb2bf;
}

#app .token.number {
    color: #d19a66;
}

#app .token.comment {
    color: #5c6370;
    font-style: italic;
}

#app div[class*="language-"] {
    background-color: #282c34;
}

code[class*="language-"], pre[class*="language-"], .terminal {
    font-family: 'Ubuntu Mono derivative Powerline', 'Ubuntu Mono', source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
</style>
