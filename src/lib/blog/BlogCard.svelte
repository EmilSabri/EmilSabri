<script>
    export let blog
    export let is2ndColumn
    console.log(blog)

    const cardStyle = "bg-stone-200 border-stone-700 border-2 rounded-md" 
</script>
<!-- {i % 3 == 1 ?  "h-[calc(61vh)]" : "h-[calc(60vh)]"}  -->

<div class="flex flex-col items-center {is2ndColumn == 2 ? "mb-8" : ""} pb-5 m-4  {cardStyle} ">
    
    <img class=" w-9/12" src={blog.thumbnail} alt={blog.title} />
    <h1 class="text-2xl">{blog.title}</h1>
    
    <div class="flex pt-3 items-center">
        <p class="">{blog.type}</p>
        <img class="w-8 mr-3" src={blog.type_icon} alt="blog type icon" />
        <p class="">{blog.age}</p>
    </div>
</div>