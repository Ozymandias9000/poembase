<script lang="ts">
  import * as api from "../api";

  let value = "";
  let poemsPromise: Promise<
    { title: string; author: string; lines: string[] }[]
  >;

  const handleSubmit = () => {
    poemsPromise = api.getPoemsByAuthor(value);
  };
</script>

<style>
</style>

<form on:submit|preventDefault={handleSubmit}>
  <label class="block text-gray-700 text-sm font-bold mb-2">Author name</label>
  <input
    type="text"
    bind:value
    class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
</form>

{#await poemsPromise}
  <p>...loading</p>
{:then res}
  {#each res || [] as poem}
    <h2 class="prose lg:prose-xl pt-6">{poem?.title}</h2>
    <h3 class="prose prose-sm pb-6">by {poem?.author}</h3>

    {#each poem?.lines || [] as line}
      <p class="prose">{line}</p>
    {/each}
  {/each}
{:catch e}
  <p style="color: red">{e.message}</p>
{/await}
