<template>
  <div class="home">
    <Header title="1asda" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from '@/components/header';

@Options({
    components: {
        Header
    }
})
export default class Home extends Vue {}
</script>
