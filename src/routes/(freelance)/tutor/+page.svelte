<script>
    import Jobs from "$lib/tutor/Jobs.svelte"
</script>


<div class="wrapper-div">
    <img src="icons/TutorHero_half.png" alt="tutor hero" class="tutor-hero" />
    <div class="study">
        <Jobs />
    </div>
    <div class="scheduler bg-blue-500">
        <p>Scheduler View</p>
    </div>
    <div class="reviews bg-yellow-300 h-[10vh]">
    </div>
</div>


<style>
    .wrapper-div {
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-areas:
            "h h h h"
            "s s c c"
            "r r r r";

        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        @apply p-4;
    }
    
    .tutor-hero {
        grid-area: h;
        @apply mx-auto bg-green-300;
    }

    .study {
        grid-area: s;
        @apply  border-black border-4;
    }

    .scheduler {
        grid-area: c
    }

    .reviews {
        grid-area: r;
    }

</style>