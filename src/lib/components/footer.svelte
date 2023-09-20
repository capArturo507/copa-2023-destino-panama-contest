<script lang="ts">
	import Instagram from './instagram.svelte';
	import Twitter from './twitter.svelte';
	import Tiktok from './tiktok.svelte';
	import Facebook from './facebook.svelte';
	import LogoCopaFooter from './logo-copa-footer.svelte';
	import LogoPanam from './logo-panam.svelte';
	export let copyright: string;
</script>

<footer class="py-32 bg-grey-100">
	<div class="container mx-auto grid grid-cols-1 auto-rows-min grid-flow-row justify-start gap-16">
		<nav aria-label="redes sociales" class="block">
			<ul class="grid gap-16 auto-cols-auto justify-start grid-flow-col my-16">
				<li class="square-12/3">
					<a
						href="https://www.instagram.com/copaairlines/"
						target="_blank"
						class="button button-outline-grey transition-colors"
						title="Instagram"
					>
						<span class="block square-16 fill-current"><Instagram /></span>
					</a>
				</li>
				<li class="square-12/3">
					<a
						href="https://www.tiktok.com/@copaairlines"
						target="_blank"
						class="button button-outline-grey transition-colors"
						title="TikTok"
					>
						<span class="block square-16 fill-current"><Tiktok /></span>
					</a>
				</li>
				<li class="square-12/3">
					<a
						href="https://www.facebook.com/copaairlines/"
						target="_blank"
						class="button button-outline-grey transition-colors"
						title="Facebook"
					>
						<span class="block square-16 fill-current"><Facebook /></span>
					</a>
				</li>

				<li class="square-12/3">
					<a
						href="https://twitter.com/CopaAirlines"
						target="_blank"
						class="button button-outline-grey transition-colors"
						title="Twitter"
					>
						<span class="block square-16 fill-current">
							<Twitter />
						</span>
					</a>
				</li>
			</ul>
		</nav>
		<div
			class="grid justify-between grid-rows-1 auto-cols-mins gap-24 grid-flow-col items-end mb-24"
		>
			<LogoCopaFooter />
			<div class="w-96">
				<LogoPanam />
			</div>
		</div>
		<p class="text-grey-600 text-12/16 max-w-prose copyright">{copyright}</p>
		<div />
		<nav aria-label="Políticas">
			<ul class="grid gap-16 auto-cols-auto justify-start grid-flow-col text-12/16">
				<li>
					<a
						href="/es/reglas"
						target="_blank"
						class="text-primary-light hover:underliene transition-all"
					>
						<span>Reglas del Concurso</span>
					</a>
					<a
						href="https://www.copaair.com/es-gs/legal/terminos-y-condiciones/politica-de-privacidad/"
						target="_blank"
						class="text-primary-light hover:underliene transition-all"
					>
						<span>Política de Privacidad</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
