<script>
    import "../../app.css"
    import { GoogleTag, Socials, Goals, Feet } from "$lib/index"
</script>

<!-- Import analytics and other meta data/tags stuff here  -->
<!-- <GoogleTag /> --->

<!-- <nav class="border-4 border-red-300 m-5">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
    <a href="/roadmap">Roadmap</a>
    <Socials />
</nav>  -->

<div class="layout-outer">
    <Goals />

    <slot></slot>
</div>



<!-- <Feet /> -->


<style>
    /* .layout-outer {
        @apply
    } */
</style>