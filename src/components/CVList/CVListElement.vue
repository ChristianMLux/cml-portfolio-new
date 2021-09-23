<template>
  <li>
    <h2>{{ expHeading }}</h2>
    <p>{{ expSubheading }}</p>
    <ul>
      <li>
        <p>Hardskills:</p>
        <p>{{ expHardSkills }}</p>
      </li>
      <li>
        <p>Tooling:</p>
        <p>{{ expToolings }}</p>
      </li>
      <li>
        <p>Prinzipien:</p>
        <p>{{ expPrinciples }}</p>
      </li>
      <li>
        <p>Softskills:</p>
        <p>{{ expSoftSkills }}</p>
      </li>
      <li>
        <p>Projekte:</p>
        <p>{{ expProjects }}</p>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CVListElement",
  props: {
    expHeading: {
      type: String,
    },
    expSubheading: {
      type: String,
    },
    expHardSkills: {
      type: String,
    },
    expToolings: {
      type: String,
    },
    expPrinciples: {
      type: String,
    },
    expSoftSkills: {
      type: String,
    },
    expProjects: {
      type: String,
    },
  },
};
</script>
