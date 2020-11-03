<style>
  main {
    @apply my-4 mx-4;
  }
</style>

<script>
  import Tailwindcss from './TailwindStyles.svelte'
  import { Router, Link, Route } from 'svelte-routing'
  import FrontPage from './components/FrontPage.svelte'

  export let url = ''
</script>

<Router {url}>
  <main>
    <Route path="/">
      <FrontPage />
    </Route>
  </main>
</Router>
