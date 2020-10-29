<script>
  import Tailwindcss from "./TailwindStyles.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import FrontPage from "./components/FrontPage.svelte";

  export let url = "";
</script>

<style>
  main {
    @apply my-4 mx-4;
  }
</style>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="test">About</Link>
  </nav>
  <main>
    <Route path="/">
      <FrontPage />
    </Route>
    <Route path="/test">yo</Route>
  </main>
</Router>
