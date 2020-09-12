<template>
  <div class="page-query">
    <button @click="query">Send Query</button>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { createApolloClient } from '../apollo.js';
import { gql } from '@apollo/client/core';

export default {
  name: "PageQuery",
  setup() {
    const apolloClient = createApolloClient();
    const result = ref(null);
    const loading = ref(false);

    async function query() {
      loading.value = true;
      try {
        const queryResult = await apolloClient.query({
          query: gql`
            query product($productId: ID!) {
              product(hashKey: $productId) {
                title
                skuNo
              }
            }
          `,
          variables: {
            productId: 11833,
          },
          fetchPolicy: 'network-only'
        });

        result.value = queryResult.data;
      } catch(error) {
        console.error(error);
      }

      loading.value = false;
    }

    return {
      result,
      loading,
      query,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>