
<script>
    let email = ''

    async function addToMailChimp() {
       const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
<p>Newsletter - Get updates on the roadmap, blogs, and future projects</p>