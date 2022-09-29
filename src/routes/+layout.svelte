<script>
    import GoogleTag from "$lib/meta/GoogleTag.svelte"
</script>

<!-- Import analytics and other meta data/tags stuff here  -->
<GoogleTag />

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <!-- <a href="/roadmap">Roadmap</a> -->
</nav>

<slot></slot>