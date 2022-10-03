
<script>
    let email = ''
    async function sendToNewsletterAPI() {
       const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email
        })
       }
        const response = await fetch("/api/newsletter", options)
    }
</script>
    <form method="POST" on:submit|preventDefault={sendToNewsletterAPI}>
        <input bind:value={email} name="email" type="email" placeholder="you@gmail.com">
        <button>Subscribe (Not hooked up to store emails yet)</button>
    </form>