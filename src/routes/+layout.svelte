<script>
    import GoogleTag from "$lib/meta/GoogleTag.svelte"
    import Socials from "$lib/socials/Socials.svelte"
</script>

<!-- Import analytics and other meta data/tags stuff here  -->
<GoogleTag />

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <!-- <a href="/roadmap">Roadmap</a> -->
    <Socials />
</nav>



<slot></slot>