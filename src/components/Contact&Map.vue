<template>
  <div class="contact-map-container">
    <div class="contact-form">
      <div class="contact-form-header">
        <h2>How to reach us</h2>
        <p class="description">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <form @submit.prevent="submitForm" novalidate>
        <div class="input-row">
          <div class="field">
            <p>First Name *</p>
            <input
              v-model="form.firstName"
              type="text"
              placeholder="First Name *"
              :class="{ error: errors.firstName }"
            />
            <p class="error-text" v-if="errors.firstName">{{ errors.firstName }}</p>
          </div>
          <div class="field">
            <p>Last Name *</p>
            <input
              v-model="form.lastName"
              type="text"
              placeholder="Last Name *"
              :class="{ error: errors.lastName }"
            />
            <p class="error-text" v-if="errors.lastName">{{ errors.lastName }}</p>
          </div>
        </div>

        <div class="field">
          <p>Email *</p>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email *"
            :class="{ error: errors.email }"
          />
          <p class="error-text" v-if="errors.email">{{ errors.email }}</p>
        </div>
        <p>Telephone</p>
        <input v-model="form.phone" type="tel" placeholder="Telephone" />

        <div class="field">
          <p>Message *</p>
          <textarea
            v-model="form.message"
            placeholder="Message *"
            :class="{ error: errors.message }"
          ></textarea>
          <p class="error-text" v-if="errors.message">{{ errors.message }}</p>
        </div>

        <p class="note">* required fields</p>

        <div class="checkbox-row">
          <input v-model="form.agree" type="checkbox" id="agree" />
          <label for="agree"> I agree to the <a href="#">Terms & Conditions</a> </label>
        </div>
        <div class="btn-wrapper">
          <button type="submit" :disabled="!form.agree">SUBMIT</button>
        </div>
      </form>
    </div>

    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.135084426352!2d-3.627356684912316!3d40.49321877935821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f53623ebc2b%3A0x121601e497e8b5cb!2sAmadeus%20IT%20Group%20SA!5e0!3m2!1sen!2sus!4v1717456327289!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});

const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const submitForm = () => {
  errors.firstName = "";
  errors.lastName = "";
  errors.email = "";
  errors.message = "";

  let isValid = true;

  if (!form.firstName.trim()) {
    errors.firstName = "First name is required.";
    isValid = false;
  }
  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required.";
    isValid = false;
  }
  if (!form.email.trim()) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = "Enter a valid email.";
    isValid = false;
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted:\n" + JSON.stringify(form, null, 2));
    Object.keys(form).forEach((key) => (form[key] = key === "agree" ? false : ""));
  }
};
</script>

<style scoped>
.contact-map-container {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #000;
  color: white;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
}

.contact-form-header {
  text-align: left;
}

.contact-form {
  flex: 1;
  max-width: 100%;
  padding: 0;
}

.contact-form h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-form .description {
  color: #aaa;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-row .field {
  flex: 1;
}

.field {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #444;
  background-color: #222;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  resize: none;
  height: 100px;
}

.error {
  border-color: red;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}

.note {
  font-size: 12px;
  color: #aaa;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c9c9c9;
}

.checkbox-row input {
  width: 15px;
  height: 15px;
  background-color: #000;
}

.checkbox-row a {
  color: white;
  text-decoration: underline;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

button {
  background-color: #d4a017;
  color: rgb(248, 244, 244);
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;
  width: 30%;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.map-container {
  flex: 1;
  min-height: 300px;
  padding: 0;
  margin-top: 150px;
}

.map-container iframe {
  border-radius: none !important;
}

form p {
  text-align: left;
  color: #acaaaa;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (min-width: 600px) and (max-width: 1023px) {
  .contact-map-container {
    flex-direction: column;
    padding: 0px;
  }

  .contact-form {
    padding: 20px;
  }

  .map-container {
    padding: 0px;
    margin-top: 10px;
    max-height: 50px;
  }

  .map-container iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
}

@media (max-width: 767px) {
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .contact-map-container {
    flex-direction: column;
    padding: 0px;
  }

  .contact-form {
    padding: 20px;
  }

  .map-container {
    padding: 0px;
    margin-top: 10px;
    max-height: 100px;
  }

  .input-row {
    flex-direction: column;
  }

  .map-container iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
}
</style>
