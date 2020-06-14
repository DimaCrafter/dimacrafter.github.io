<template>
	<div class="card">
		<div class="caption">
			{{ name }}
			<a v-if="npm" :href="`https://npmjs.com/package/${name}`" style="color: #c12127" target="_blank">
				<img :src="$withBase('/img/npm.png')" />
			</a>
			<a :href="`https://github.com/${fullname}`" style="color: #181616" target="_blank">
				<img :src="$withBase('/img/github.png')" />
			</a>
		</div>
		<p>{{ description }}</p>
		<img v-if="npm" :src="`https://nodei.co/npm/${name}.png`" />
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		fullname: String,
		description: String,
		npm: { type: Boolean, default: true }
	}
}
</script>

<style>
.card {
    background-color: #f3f5f7;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 6px;
}

.card > .caption {
    font-size: 22px;
    font-weight: 600;
}

.card > .caption > a {
    position: relative;
    display: inline-block;
    margin-left: 2px;
    transition: 0.3s;
}
.card > .caption > a:first-child { margin-left: 8px; }

.caption > a:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: currentColor;
    pointer-events: none;
    transition: 0.3s;
}

.caption > a:hover:before { width: 100%; }
.caption > a:hover { transform: translateY(-2px); }

.card > p {
    margin: 0;
    margin-top: 0.75rem;
    margin-bottom: 5px;
}
</style>