<template>
  <div class="footer">
    <hr />
    <div class="footer-content">
      <span class="link" @click="$emit('changePage', 'legal')">Legal Disclosure</span>
      <span class="link" @click="$emit('changePage', 'privacy')">Privacy Policy</span>
    </div>
  </div>
</template>

<style>
.footer {
  position: absolute;
  width: 80%;
  bottom: 0;
}

.footer-content {
  margin: 15px 0 20px;
  display: flex;
  justify-content: center;
  gap: 25px;
}

.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
