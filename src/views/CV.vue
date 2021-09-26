<template>
  <article>
    <CVSection :expHeading="itRelevant">
      <CVList :entries="itRelevantEntries" />
    </CVSection>
    <CVSection :expHeading="elseRelevant">
      <CVList :entries="elseRelevantEntries" />
    </CVSection>
    <CVSection :expHeading="otherExp">
      <CVList :entries="otherEntries" />
    </CVSection>
  </article>
</template>
<script>
import CVSection from "@/components/CVList/CVSection.vue";
import CVList from "@/components/CVList/CVList.vue";
import CVENTRIES from "@/components/CVList/CVEntries";
export default {
  name: "CV",
  components: { CVSection, CVList },
  data() {
    return {
      itRelevant: "IT-Relevante Erfahrungen",
      elseRelevant: "Sonstige relevante Erfahrungen",
      otherExp: "Andere Erfahrungen",
    };
  },
  computed: {
    entries() {
      return CVENTRIES;
    },
    itRelevantEntries() {
      return CVENTRIES.filter((entry) =>
        entry.entryType.includes("itRelevant")
      );
    },
    elseRelevantEntries() {
      return CVENTRIES.filter((entry) =>
        entry.entryType.includes("elseRelevant")
      );
    },
    otherEntries() {
      return CVENTRIES.filter((entry) => entry.entryType.includes("otherExp"));
    },
  },
};
</script>

<style lang="scss" scoped></style>
