<template>
  <div class="home">
    <AppHeader />
    <TableHeader />
    <CanbanTable />
  </div>
</template>

<script>
// @ is an alias to /src
import TableHeader from "@/components/TableHeader";
import CanbanTable from "@/components/CanbanTable";
import AppHeader from "@/components/AppHeader";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    CanbanTable,
    TableHeader,
  },
};
</script>
