
<script>
    import BlogCard from "../../lib/blog/BlogCard.svelte";
    
    const b1 = {
        title: "Tools for Thought",
        type: "Experiment",
        type_icon: "icons/twitter.svg",
        age: "1 day old",
        thumbnail: "images/computer.webp"
    }

    const b2 = {...b1, thumbnail: "images/primalsnak.webp" }
    
    const blogs = [b1, b2, b1, b2, b1, b2, b1, b2, b1]
    const blogs1 = []
    const blogs2 = []
    const blogs3 = []

    for (let i = 0; i < blogs.length; i++) {
        const colInd = i % 3
        if (colInd == 0) {
            blogs1.push(blogs[i])
        }
        else if (colInd == 1) {
            blogs2.push(blogs[i])
        } else {
            blogs3.push(blogs[i])
        }
    }

</script>
<div class="flex p-10 border-red-600 border-2">
    <div class="w-1/3"> 
        
        {#each blogs1 as blog}
            <BlogCard blog={blog}/>
        {/each}
    </div>
    <div class="w-1/3">
        {#each blogs2 as blog}
            <BlogCard blog={blog} is2ndColumn={2}/>
        {/each}
    </div>
    <div class="w-1/3">
        {#each blogs3 as blog}
            <BlogCard blog={blog} />
        {/each}
    </div>
    
</div>

<!-- 
{#each blogs as blog, i}
        <div class="flex flex-col w-1/4 {i % 3 == 1 ?  "h-[calc(57vh)]" : "h-[calc(60vh)]"} 
        bg-stone-200 m-2 border-stone-700 border-2 rounded-md ">
            <img src={blog.thumbnail} alt={blog.title} />
            <h1 class="font-medium">{blog.title}</h1>
            <div class="flex text-xs ">
                <p>{blog.type}</p>
                <img class="w-10" src={blog.type_icon} alt="blog type icon" />
                <p class="pl-5">{blog.age}</p>
            </div>
        </div>
    {/each}
 -->