<script>
	import { LinkedInSvg, GithubSvg, EmailSvg } from '$lib/svgs';
</script>

<div class="container h-full mx-auto grid md:grid-cols-[auto_1fr] items-center py-8 px-4 gap-8">
	<div class="h-full w-72 mx-auto">
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
		<div class="text-left border-yellow-700">
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

	<div class=" w-full h-full">
		<!-- PJ project -->
		<div class=" w-full grid grid-cols-[1fr_auto] mb-8">
			<div class="border-l-2 border-gray-400 pl-2 mr-2">
				<!-- <div class="flex"> -->
				<h2 class="!text-3xl !font-medium">
					PreJourney <span class="!text-base !font-light ml-4">May 1, 2023</span>
				</h2>

				<!-- </div> -->
				<h3 class="!font-normal mb-4">SaaS offering Midjourney through an API</h3>
				<div class="!font-light text-gray-200">
					<p>
						Built this for my AI lootbox merch store -
						<a class="underline text-primary-500" href="https://bizarrebazaar.io/"
							>bizarrebazaar.
						</a>
						Needed a way to programatically create images for the lootboxes and as of now Midjourney
						currently has the best generative art.
					</p>

					<br />

					<!-- <p>
						I've integrated with Stripe's webhooks which serve to authorize users in the database,
						which is using MySQL hosted on planetscale.
					</p> -->

					<!-- <p>
						The meat of the project is the API that customers can use to generate unique images
						either on demand or to select a premade image whose prompt matches closest with the
						request.
					</p> -->

					<p>
						The website portion is built using SvelteKit using TailwindCSS hosted on Vercel. The
						meat of the project is the API that our customers can use. I used AWS API Gateway
						because it can programatically create API keys which includes throttling and usage
						limits right out the gate.
					</p>

					<!-- <p>
						Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
						blah Bla.
					</p> -->
				</div>
				<!-- /projects/prejourney -->
				<a href="" class="font-bold text-primary-600">Read more -></a>
			</div>

			<img class="aspect-video object-cover rounded-lg h-72" src="/imgs/pj-screenshot.png" alt="" />
		</div>
		<!-- Second project -->

		<div class=" w-full grid grid-cols-[1fr_auto]">
			<div class="border-l-2 border-gray-400 pl-2 mr-2 flex flex-col justify-center">
				<div>
					<h2 class="!text-3xl !font-medium">
						AI Blogs <span class="!text-base !font-light ml-4">Jan 1, 2023</span>
					</h2>
					<h3 class="!font-normal mb-4">Chatgpt3.5 blogs created through keywords</h3>
				</div>
				<div class="!font-light text-gray-200">
					<p>
						Using OpenAI's GPT3.5 API, I created a system that given a keyword it will grab all the
						related keyword ideas from Google Keyword Planner and then use those keywords to create
						blog posts.
					</p>
					<br />
					<!-- <p>
						The flow for a given keyword "brain fog" looks like this. Search keyword ideas on
						Google's Keyword Planner API. Grab the 1,501 keyword ideas with the related metadata
						such as search volume and save to a DB. Then, for each keyword, prompt GPT3.5-turbo to
						create a blog with 5-7 paragraphs in a certain structure.
					</p> -->

					<!-- <br /> -->

					<p>
						You can see an implementation of it at <a
							href="https://brianfog.com/"
							class="underline text-primary-500">brianfog</a
						>
					</p>

					<br />

					<!-- <p>
						The plan for AI Blogs is to come back and create a SaaS around the system I've created
						so anyone can use it to create content for their blogs or park their domains.
					</p> -->
				</div>
				<!-- /projects/ai-blogs -->
				<a href="" class="font-bold text-primary-600">Read more -></a>
			</div>

			<img
				class="aspect-video object-cover rounded-lg h-72"
				src="/imgs/brianfog-screenshot.png"
				alt=""
			/>
		</div>
	</div>
</div>
