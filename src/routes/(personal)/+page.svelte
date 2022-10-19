<script>
    import NewsLetter from "$lib/newsletter/NewsLetter.svelte";
</script>

<div class="wrapper">
    <section class="welcome mb-10">
            <h1>Welcome to EmilSabri.com</h1>
            <h2>I've been expecting you...</h2>
            <img src="/images/boss.png" alt="Emil the Boss" class="" />
    </section>

    <section class="projects text-center mb-10">
        <h1 class="mb-3">Projects</h1>
        <!-- List of project cards -->
        <div class="flex gap-4">
            <div class="card">
                <img src="/images/pdfbookmarker_thumbnail.png" alt="PDF Bookmarker Thumbnail" class="h-[33vh]" />

                <div class="card-content flex flex-col text-left p-3">
                    <div class="flex justify-between text-white mb-2">
                        <h2 class="mr-2">Referral Tree</h2>
                        <h2 class="text-sm">Oct 18, 2022</h2>
                    </div>

                    <h3 class="text-yellow-500">Revenue: $0</h3>
                </div>
            </div>

            <div class="card">
                <img src="/images/RAF_meme.jpeg" alt="PDF Bookmarker Thumbnail" class="h-[33vh]" />

                <div class="card-content flex flex-col text-left p-3">
                    <div class="flex justify-between text-white mb-2">
                        <h2 class="mr-2">Referral Tree</h2>
                        <h2 class="text-sm">Oct 25, 2022</h2>
                    </div>

                    <h3 class="text-yellow-500">Revenue: $0</h3>
                </div>
            </div>
        </div>
        
    </section>

    <section class="blog-posts">
        <h1 class="mb-3">Blog Posts</h1>

        <div class="posts">
            <h2>PDF Bookmarker has Launched!! 🚀🚀🚀</h2>
            <h3>100 views | 3 mins avg</h3>
        </div>

    </section>
</div>



<style>
    .wrapper {
        font-size: clamp(0.5rem, 0.75vw, .75rem);
        @apply flex flex-col items-center
    }
    .welcome {
        @apply flex flex-col text-center;
    }

    /*  Todo - add some media query styling to fix the view at certain breakpoints */
    .projects {
        /* @apply flex; */
    }

    .card {
        @apply w-[300px] bg-stone-800 border-8 border-stone-800 rounded-lg shadow-lg;
    }

    .blog-posts {
        @apply w-3/4 text-center pb-10 flex flex-col gap-5;
    }

    .posts {
        @apply flex justify-center gap-x-56 bg-stone-700 border-2 text-white shadow-md p-2 rounded-md;
    }


    .section-style {
        @apply border-4 border-blue-300;
    }

</style>


<!-- 
<div class="flex flex-col justify-center items-center border-red-200 border-4">
    <section class="section-style">
        <div class="">
            <h1>Welcome to my domain - EmilSabri.com</h1>
            <h2>I've been expecting you...</h2>
            <img src="/images/boss.png" alt="Emil the Boss" />

            <p>Sign up to enjoy a live case study of success</p>
            <NewsLetter />
            <p>Newsletter - Get updates on the roadmap, blogs, and future projects</p>
        </div>
    </section>

    <section class="section-style">
        <h1>About Me</h1>
        <p>
            Hey, I’m Emil and this is my site for all things me.
            I’m a computer science grad from UC, Irvine with about 2 years of work experience.
            Recently started taking my entrepreneurship dreams seriously.
            Instead of delaying the inevitable,I’ve decided to go all in.
        </p>
        <p>
            The main impetus for creating this site is to improve my frontend skills before working
            on my company site SabriSaaS.com, which I’ll need polished before applying to some
            social platform’s business APIs.
        </p>
        <p>
            Look around and you’ll find blog posts, status updates, and projects that I’m currently 
            working on to further progress my goal.
        </p>
    </section>

    <section class="section-style">
        <h1>Goals - by end of 2023</h1>
        <ul>
            <li>Escape wage slavery - Net Profit: $2k/month </li>
            <li>Todo - Add 2 more</li>
        </ul>
    </section>

    <section class="section-style">
        <h1>Plan</h1>
        <p>
            My plan of attack is fairly simple.
            Create a shit ton of Shopify apps then build up to standalone SaaS products. 
        </p>
    </section>
</div> -->