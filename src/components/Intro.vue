<template>
  <div>

  </div>
</template>

<script>

export default {
  created() {
    // settimeout fixes an issue with hash-based routing, on android 4 for instance
    var that = this;
    setTimeout(() => {
      if (that.$route.path == "/")
        window.location.replace('/intro.html');
    }, 100);
  }
}
</script>
