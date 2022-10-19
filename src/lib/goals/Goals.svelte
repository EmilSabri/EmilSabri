<script>
    const years = [2022, 2023, 2024, 2025]
    let revenue = ["0", "2,000", "10,000", "50,000"]
    let activeYearIndex = 0;
    const handleClick = (yearIndex) => {
        activeYearIndex = yearIndex;
    }

    let highlight = "text-yellow-500"
</script>

<div class="goals top">
    <div class="flex">
        <p class="self-center">Goals:</p>

        {#each years as year, i}
            <button on:click={() => handleClick(i)} class:active={year === years[activeYearIndex]}
            class="goals-btn m-3 p-1">
                {year}
            </button>
        {/each}
        
    </div>

    <p class="text-yellow-500">Revenue: ${revenue[activeYearIndex]}k/month</p>
</div>


<style>
    .top {
        @apply bg-stone-800 text-white;
    }

    .goals {
        @apply flex flex-col items-center;
    }

    .goals-btn {
        @apply  rounded-md ease-in duration-200 bg-gray-500;
    }

    .active {
        @apply bg-yellow-500;
    }
</style>