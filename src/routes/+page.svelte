<script>
    import NewsLetter from "../lib/newsletter/NewsLetter.svelte";

    const sectionStyle = "border-4 border-blue-300 max-w-xl"
</script>

<div class="flex flex-col justify-center items-center border-red-200 border-4">
    <section class={sectionStyle}>
        <div class="">
            <h1>Welcome to my domain - EmilSabri.com</h1>
            <h2>I've been expecting you...</h2>
            <img src="/images/boss.png" alt="Emil the Boss" />
            <NewsLetter />
        </div>
    </section>

    <section class={sectionStyle}>
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
            Look around and you’ll find you'll blog posts, status updates, and projects that I’m currently 
            working on to further progress my goal.
        </p>
    </section>

    <section class={sectionStyle}>
        <h1>Goals - by end of 2023</h1>
        <ul>
            <li>Escape wage slavery - Net Profit: $2k/month </li>
            <li>Todo - Add 2 more</li>
        </ul>
    </section>

    <section class={sectionStyle}>
        <h1>Plan</h1>
        <p>
            My plan of attack is fairly simple.
            Create a shit ton of Shopify apps then build up to standalone SaaS products. 
        </p>
    </section>
</div>