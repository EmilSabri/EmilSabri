<script>
	import { YouTubeSvg, LinkedInSvg, GithubSvg } from '$lib/svgs';
</script>

<div class="w-fit m-auto h-screen pt-[10%]">
	<div>
		<div class="flex justify-between w-[280px] ml-[26px]">
			<div><a href="download_link.website" class="underline">Resume</a></div>
			<div>i lift therefore i am</div>
		</div>
		<div class="flex">
			<div class="flex flex-col pr-[2px] gap-4">
				<a href="https://github.com/EmilSabri" target="_blank"><GithubSvg props={{ width: '24px', height: '24px' }} /></a>
				<a href="https://www.linkedin.com/in/esabri/" target="_blank">
					<LinkedInSvg props={{ width: '24px', height: '24px' }} />
                </a>
				<a href="https://www.youtube.com/watch?v=y6120QOlsfU" target="_blank">
					<YouTubeSvg props={{ width: '24px', height: '24px' }} />
                </a>
			</div>

			<div class="w-[280px] h-[280px]">
				<img
					src="/imgs/JACKED.webp"
					alt="jack attack"
					style="display: block"
					class="order-1 xl:order-2 aspect-video object-cover w-full xl:h-72 mx-aut"
				/>
			</div>
			<div class="pl-[2px]">
				<div>yes</div>
				<div>im</div>
				<div>jacked</div>
				<div>yes</div>
				<div>i</div>
				<div>code</div>
			</div>
		</div>
	</div>
</div>
