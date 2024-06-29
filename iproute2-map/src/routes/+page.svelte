<h1>iproute2-map</h1>

<div class="cols">
	<div>
		Rules (<code>ip -4 rule</code>):
		<textarea bind:value={rawRules} />
	</div>
	<div>
		Routes (<code>ip -4 route show table all</code>):
		<textarea bind:value={rawRoutes} />
	</div>
</div>

<button on:click={() => render()}>Render</button>
<br />
<br />

<div class="cols">
	<div class="rules">
		{#each rules as rule}
			<div class="rule">
				<div class="priority">{rule.priority}</div>
				<div class="condition">
					<div class="label">Condition</div>
					<div>
						{rule.from}
						➔
						{'all'}
					</div>
				</div>
				<div class="action">
					<div class="label">Action</div>
					{#if rule.lookup}
						<div>Table: {rule.lookup}</div>
					{/if}
				</div>
				<div class="flags">
					{#each Object.entries(rule) as [key, value]}
						{#if !['priority', 'from', 'lookup', 'raw'].includes(key)}
							<span>{key} = {value}</span>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="tables">
		{#each tables as table}
			<div class="table" class:hidden={table.hidden}>
				<h2>Table: {table.name}</h2>
				<button class="hide-toggle" on:click={() => table.hidden = !table.hidden}>{table.hidden ? 'Show' : 'Hide'}</button>

				{#each table.routes as route}
					<div class="route">
						<div class="selector">
							<div class="label">Selector</div>
							{#if route.dst}
								<div>
									{#if route.src}{route.src}{/if}
									➔
									{route.dst}
									{#if route.dstKind}({route.dstKind}){/if}
								</div>
							{/if}
						</div>
						{#if route.via}
							<div class="gateway">
								<div class="label">Gateway (via)</div>
								<ul>
									{#each route.via as via}
										<li>{via}</li>
									{/each}
								</ul>
							</div>
						{:else}
							<div class="gateway">
								<div class="label">Gateway</div>
								Pass through
							</div>
						{/if}
						<div class="output">
							<div class="label">Output</div>
							{#if route.to.dev}
								<div>Device: {route.to.dev}</div>
							{/if}
						</div>
						<div class="flags">
							{#each Object.entries(route) as [key, value]}
								{#if !['dst', 'dstKind', 'src', 'raw', 'to', 'via'].includes(key)}
									<span>{key} = {value}</span>
								{/if}
							{/each}
							{#if route.rest}
								<span>rest = {route.rest.join(' ')}</span>
							{/if}
						</div>
					</div>
				{/each}

				{#if table.hidden}
					<div class="hint">Hidden routes: {table.routes.length}</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
import { browser } from '$app/environment'

let rawRoutes = browser && localStorage.getItem('raw-routes') || '';
let rawRules = browser && localStorage.getItem('raw-rules') || '';

interface IRoute {
	raw: string;
	dst: string;
	dstKind?: 'local' | 'broadcast';
	via?: string[];
	dev?: string;
	proto?: string;
	scope?: string;
	src?: string;
	onlink?: boolean;
	rest?: string[];
	to: {
		dev?: string;
	}
}

interface ITable {
	name: string;
	routes: IRoute[];
	hidden: boolean;
}

interface IRule {
	raw: string;
	from: string;
	lookup?: string;
	priority: number;
}

function parseRoute (raw: string) {
    const route: IRoute = {
		dst: '-',
		raw,
		to: {}
	};

    const parts = raw.split(' ');
    let prefix = parts.shift()!;
    if (prefix == 'local' || prefix == 'broadcast') {
        route.dst = parts.shift()!;
        route.dstKind = prefix;
    } else {
        route.dst = prefix;
    }

	let part;
	const rest = [];

    while (part = parts.shift()) {
        switch (part) {
            case 'dev':
                route.to.dev = parts.shift();
                break;
            case 'proto':
            case 'scope':
            case 'src':
                route[part] = parts.shift();
                break;
            case 'onlink':
                route[part] = true;
                break;
            case 'via':
                if (route.via) {
                    route.via.push(parts.shift()!);
                } else {
                    route.via = [parts.shift()!];
                }
                break;
            default:
                rest.push(part);
                break;
        }
    }

    if (rest.length != 0) {
        route.rest = rest;
    }

    return route;
}

const RULE_TABLE_REGEX = /table ([^ ]+)/;
function parseRoutes (input: string) {
    const tables: ITable[] = [];
    for (const line of input.split('\n')) {
        const match = RULE_TABLE_REGEX.exec(line);
        const tableName = match ? match[1] : 'main';
        const rule = parseRoute(line.replace(RULE_TABLE_REGEX, '').replace('  ', ' ').trimEnd());

        const table = tables.find(t => t.name == tableName);
        if (table) {
            table.routes.push(rule);
        } else {
            tables.push({ name: tableName, routes: [rule], hidden: tableName == 'local' });
        }
    }

    return tables;
}

function parseRules (input: string) {
	const rules: IRule[] = [];

	for (const line of input.split('\n')) {
		const [priority, raw] = line.split(/:\s*/);
		const rule: any = { raw, priority: +priority };
		const parts = raw.split(' ');

		let part;
		while (part = parts.shift()) {
			rule[part] = parts.shift()!;
		}

		rules.push(rule);
	}

	return rules;
}

let rules: IRule[] = [];
let tables: ITable[] = [];

function render (save = true) {
	if (save) {
		localStorage.setItem('raw-rules', rawRules);
		localStorage.setItem('raw-routes', rawRoutes);
	}

	rules = parseRules(rawRules);

	tables = parseRoutes(rawRoutes);
	for (const table of tables) {
		table.routes.sort((a, b) => {
			if (!a.proto) {
				return -1;
			} else if (!b.proto) {
				return 1;
			} else {
				return a.proto.localeCompare(b.proto);
			}
		});
	}
}

if (browser && rawRoutes) {
	render(false);
}
</script>