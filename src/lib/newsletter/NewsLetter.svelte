
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
    <form method="POST" on:submit|preventDefault={addToMailChimp}>
        <input bind:value="{email}" name="email" type="email" placeholder="you@gmail.com">
        <button>Subscribe (Not hooked up to store emails yet)</button>
    </form>