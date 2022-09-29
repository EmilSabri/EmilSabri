
<script>
    const API_KEY = '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'
    let email = ''

    async function addToMailChimp() {
       const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        },
        body: JSON.stringify({
            email: email
        })
       }
        const response = await fetch('https://api.sendinblue.com/v3/contacts', options);
    }
</script>

<p>Sign up to enjoy a live case study of success</p>
    <form method="POST" on:submit|preventDefault={addToMailChimp}>
        <input bind:value="{email}" name="email" type="email" placeholder="you@gmail.com">
        <button>Subscribe</button>
    </form>
<p>Newsletter - Get status updates on the roadmap, blogs, and future projects</p>