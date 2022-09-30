<script>
    const years = [2022, 2023, 2024, 2025]
    let revenue = ["0", "2,000", "10,000", "50,000"]
    let activeYearIndex = 0;
    const handleClick = (yearIndex) => {
        activeYearIndex = yearIndex;
    }

    let highlight = "text-yellow-500"
</script>

<div class="flex flex-col items-center bg-stone-800 text-white">
    <div class="flex">
        <p class="my-3 p-1">Time Travel:</p>
        {#each years as year, i}
            <button id="{years[i]}-block" on:click={() => handleClick(i)}
            class="{year === years[activeYearIndex] ? "bg-yellow-500" : "bg-gray-500"} m-3 p-1 rounded-md ease-in duration-200">
                {year}
            </button>
        {/each}
    </div>

    <p class="text-yellow-500">Revenue: ${revenue[activeYearIndex]}k/month</p>
</div>