<script>
    import "../app.css"
    import GoogleTag from "$lib/meta/GoogleTag.svelte"
    import Socials from "$lib/socials/Socials.svelte"
    import TimeTravel from "../lib/timetravel/TimeTravel.svelte";
</script>

<!-- Import analytics and other meta data/tags stuff here  -->
<GoogleTag />

<nav class="border-4 border-red-300 m-5">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <!-- <a href="/roadmap">Roadmap</a> -->
    <Socials />
</nav>

<TimeTravel />

<slot></slot>