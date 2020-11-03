<style>
  .form * + * {
    margin-left: 1rem;
  }
</style>

<script lang="ts">
  import * as api from '../api'

  let value = ''
  let searchType
  let poemsPromise: Promise<{ title: string; author: string; lines: string[] }[]>

  const handleSubmit = (searchType) => () => {
    console.log(searchType)
    poemsPromise = api.getPoems(value, searchType)
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit(searchType)} class="form">
    <select name="searchType" bind:value={searchType}>
      <option value="author">Author</option>
      <option value="title">Title</option>
    </select>

    <input
      type="text"
      bind:value
      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    <button
      on:click|preventDefault|self={handleSubmit('random')}
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Random</button>
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
</div>
