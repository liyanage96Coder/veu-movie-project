<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="address">
        <h2>Amadeus IT Group</h2>
        <p>
          C. Salvador de Madariaga, 1<br />
          28027 Madrid<br />
          Spain
        </p>
      </div>
      <div class="social">
        <p>Follow us on</p>
        <div class="icons">
          <a href="#"><img src="../assets/Icons/Twitter White.svg" alt="Twitter" /></a>
          <a href="#"><img src="../assets/Icons/Youtube White.svg" alt="YouTube" /></a>
        </div>
      </div>
    </div>

    <hr />

    <div class="footer-bottom">
      <p>Copyright © {{ currentYear }} Amadeus Hotels. All rights reserved.</p>
      <p>
        Photos by
        <a href="https://unsplash.com/@felixmooneeram" target="_blank" rel="noopener"
          >Felix Mooneeram</a
        >
        &amp;
        <a href="https://unsplash.com/@sergek" target="_blank" rel="noopener">Serge Kutuzov</a>
        on <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #1c1c1c;
  color: #e0e0e0;
  font-size: 0.9rem;
  font-family:Arial, Helvetica, sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding: 2rem 3rem;
}

.address p {
  margin: 0.5rem 0 0 0;
  line-height: 1.5;
  text-align: left;
  font-size: 0.9rem;
}

.social {
  text-align: right;
  display: flex;
  font-size: 1rem;
}

.social p {
  margin: 0 0 0.5rem 0;
}

.icons a {
  margin-left: 1rem;
  display: inline-block;
}

.icons img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1); 
}

hr {
  border: none;
  border-top: 1px solid #444;
  margin: 1.5rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.8rem;
  padding: 1rem 3rem;
  font-size: 1rem;
  color: #b4b3b3;
}

.footer-bottom a {
  color: #b4b3b3;
  text-decoration: underline;
}

@media (min-width: 600px) and (max-width: 1023px) {
  .footer-bottom{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 767px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5rem;
  }

  .address p{
    text-align: center;
    font-size: medium;
  }
}
</style>
