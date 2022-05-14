<template>
  <div class="home">
    <BrandLogo />
    <AppHeader />
    <CanbanTable />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader";
import CanbanTable from "@/components/CanbanTable";
import BrandLogo from "@/components/BrandLogo";

export default {
  name: "HomeView",
  components: {
    BrandLogo,
    CanbanTable,
    AppHeader,
  },
};
</script>
