<script>
	import { LinkedInSvg, GithubSvg, EmailSvg } from '$lib/svgs';
</script>

<div class="container h-full mx-auto grid grid-cols-[auto_1fr] items-center py-8 px-4 gap-8">
	<div class="h-full w-72">
		<img
			src="/imgs/YellowStone_TreeSwang.png"
			alt="YellowStone Tree Swang"
			class=" mb-4 aspect-square object-cover rounded-lg"
		/>
		<div class="flex gap-4">
			<h1 class="text-3xl text-left">Emil Sabri</h1>
			<h3 class="self-center !font-normal">San Diego</h3>
		</div>
		<div class="flex gap-6 my-4">
			<!-- Links -->
			<a href="https://www.linkedin.com/in/esabri/" target="_blank" class="">
				<LinkedInSvg props={{ width: '32px', height: '32px', fill: '#fff', class: 'rounded-lg' }} />
			</a>

			<a href="https://github.com/EmilSabri" target="_blank" class="">
				<GithubSvg props={{ width: '32px', height: '32px', fill: '#fff', class: 'rounded-lg' }} />
			</a>

			<a href="mailto:emil.sabri@gmail.com" class="">
				<!-- rounded-lg px-4 py-2 -->
				<!-- <button class="btn btn-sm bg-yellow-700 text-white rounded-lg">Email Me</button> -->
				<EmailSvg props={{ width: '32px', height: '32px', fill: '#fff', class: 'rounded-lg' }} />
			</a>
		</div>
		<div class=" text-left border-yellow-700">
			<p>
				Professional experience is wide and varied. I have worked on projects in computer vision,
				full stack, and dev ops.
			</p>
			<br />
			<p>
				Working on a SaaS to bring an API to Midjourney. Check it out
				<a
					href="https://mushroom-mafia-app.vercel.app/"
					target="_blank"
					class="text-primary-500 underline font-medium"
					>here
				</a>
			</p>
			<br />
			<p>
				Currently looking for a full time role that will prove to be a great workspace for new
				learnings and challenges.
			</p>
			<p>And to not go broke lol</p>
		</div>
	</div>

	<div class=" w-full h-full border-2">
		<div class=" border-red-700">other section</div>
	</div>
</div>
