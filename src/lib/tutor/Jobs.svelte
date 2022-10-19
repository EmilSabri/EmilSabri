<!-- 
    name - Jobs.svelte
    Description - Lists and allows selections for all the tutoring help I provide
 -->
<script>
    import { Accordion as A, Button } from 'stwui';
    let open = '';

    const handleClick = (item) => {
        if (open === item) {
            open= '';
        } else {
            open = item;
        }
    }
</script>


<div class="outer">
    <!-- <div class="tutor-options"> -->
        <button class="btn">
            GET A SUMMER 2023 INTERNSHIP
        </button>
        <button class="btn">Academic Help</button>
        <button class="btn">Job Prep</button>
    <!-- </div> -->
</div>


<style>
    .outer {
        @apply h-full flex flex-col justify-center bg-blue-100;
    }

    .tutor-options {
        @apply w-7/12 flex flex-col justify-center py-10 bg-red-400;
    }

    .btn {
        @apply relative inline-flex justify-center items-center text-2xl font-medium  outline-none my-5;
    }

    .btn:hover {
        @apply animate-none scale-95 ;

    }

    .tutor-description {
        @apply w-5/12 bg-green-400 text-center
    }
</style>

<!-- 
<A>

    {#each  ["item1", "item2", "item3"] as item}
        <A.Item open={open === item}>
            <A.Item.Title slot="title" on:click={() => handleClick(item)}>

                <h1 class="text-lg text-white h-32">{item.toUpperCase()}</h1>
                
            </A.Item.Title>
            <A.Item.Content slot="content">
                asdf
            </A.Item.Content>
        </A.Item>
    {/each}
</A> -->
