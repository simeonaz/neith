<template>
  <div class="container">
    <div class="cube"><div class="cube__inner"></div></div>
    <div class="cube"><div class="cube__inner"></div></div>
    <div class="cube"><div class="cube__inner"></div></div>
  </div>
</template>
<style>
.container {
  --uib-size: 45px;
  --uib-color: black;
  --uib-speed: 1.75s;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20%;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.6);
}

.cube {
  flex-shrink: 0;
  width: calc(var(--uib-size) * 0.2);
  height: calc(var(--uib-size) * 0.2);
  animation: jump var(--uib-speed) ease-in-out infinite;
}

.cube__inner {
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 25%;
  background-color: var(--uib-color);
  transform-origin: center bottom;
  animation: morph var(--uib-speed) ease-in-out infinite;
  transition: background-color 0.3s ease;
}

.cube:nth-child(2) {
  animation-delay: calc(var(--uib-speed) * -0.36);

  .cube__inner {
    animation-delay: calc(var(--uib-speed) * -0.36);
  }
}
.cube:nth-child(3) {
  animation-delay: calc(var(--uib-speed) * -0.2);

  .cube__inner {
    animation-delay: calc(var(--uib-speed) * -0.2);
  }
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }

  30% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translateY(-200%);
    animation-timing-function: ease-in;
  }

  75% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
}

@keyframes morph {
  0% {
    transform: scaleY(1);
  }

  10% {
    transform: scaleY(1);
  }

  20%,
  25% {
    transform: scaleY(0.6) scaleX(1.3);
    animation-timing-function: ease-in-out;
  }

  30% {
    transform: scaleY(1.15) scaleX(0.9);
    animation-timing-function: ease-in-out;
  }

  40% {
    transform: scaleY(1);
  }

  70%,
  85%,
  100% {
    transform: scaleY(1);
  }

  75% {
    transform: scaleY(0.8) scaleX(1.2);
  }
}
</style>
