<template>
  <li class="exp__entry">
    <div class="heading__wrapper">
      <h3>{{ expHeading }}</h3>
      <p>{{ expSubheading }}</p>
    </div>
    <ul class="exp__innerlist">
      <li>
        <p>{{ entryHeadingOne }}</p>
        <p>{{ expHardSkills }}</p>
      </li>
      <li>
        <p>{{ entryHeadingTwo }}</p>
        <p>{{ expTooling }}</p>
      </li>
      <li>
        <p>{{ entryHeadingThree }}</p>
        <p>{{ expPrinciples }}</p>
      </li>
      <li>
        <p>{{ entryHeadingFour }}</p>
        <p>{{ expSoftSkills }}</p>
      </li>
      <li>
        <p>{{ entryHeadingFive }}</p>
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
    expTooling: {
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
    entryHeadingOne: {
      type: String,
    },
    entryHeadingTwo: {
      type: String,
    },
    entryHeadingThree: {
      type: String,
    },
    entryHeadingFour: {
      type: String,
    },
    entryHeadingFive: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
li > * {
  margin: 0;
  padding: 0;
}
.exp__entry {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 1rem 1rem 2rem 0rem;
}
.heading__wrapper {
  display: flex;
  flex-flow: column;
  width: 38.19vw;
  p {
    letter-spacing: 0.1rem;
    line-height: 1.2rem;
  }
}
.heading__wrapper > * {
  margin: 0;
  padding: 0;
}
.exp__innerlist {
  list-style-type: none;
  width: 61.8vw;
  padding: 0 0rem 0rem 1rem;
  p {
    letter-spacing: 0.1rem;
    line-height: 1.2rem;
    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
  li {
    padding: 0.5rem 0rem 0.5rem 0.5rem;
  }
}
.exp__innerlist > li:nth-child(1n + 1) {
  border-radius: 0.4rem;
  color: var(--dark);
  background-color: var(--bright);
}
.exp__innerlist > li:nth-child(2n + 1) {
  color: var(--dark);
  background-color: snow;
}
</style>
