<template>
<form @submit.prevent="formSubmitted({username, password})" class='vue-auth-component-form'>
  <div v-if="error" class='form-error'>{{error.message}}</div>

  <input v-model="username" :placeholder="usernamePlaceholder" tabIndex='1' />
  <input v-model="password" :placeholder="passwordPlaceholder" tabIndex='1' type='password' />

  <div class='forgot-password'>
    <a href='javascript://' @click.prevent={forgotClicked} tabIndex='2'>forgot password</a>
  </div>

  <button type='submit' tabIndex='1'>{{buttonText}}</button>
</form>
</template>

<script>
import { sharedMethods, sharedProps } from '../forms';

export default {
  name: 'local-signup',
  data () {
    return {
      error: undefined,
      username: '',
      password: '',
    }
  },
  methods: {
    ...sharedMethods
  },
  props: {
    ...sharedProps,
    buttonText: {
      type: String,
      default: 'Signup'
    }
  }
}
</script>

<style lang="less">
div.auth-ui-container {
	form.vue-auth-component-form {
		margin-bottom: 3px;
	}	
}

form.vue-auth-component-form {
	text-align: center;
	font-size: 16px;
	margin-top: 22px;

	div.forgot-password {
		margin-top: 12px;
		height: 15px;
		font-size: 12px;
		a {
			color: #77BFED;
		}
	}

	button {
		width: calc(100% - 10px);
		height: 52px;
		background: #77BFED;
		border: none;
		color: white;
		margin-top: 22px;
		font-size: 16px;
	}

	input {
		border-bottom: solid 1px #E6E6E6;
		border-top: none;
		border-left: none;
		border-right: none;
		height: 30px;
		width: calc(100% - 10px);
		text-align: center;
		padding: 6px 0 2px;
		margin-bottom: 4px;
		outline: none;
		font-size: 14px;
		box-sizing: content-box;

		&:focus {
			border-bottom: solid 1px #77BFED;
		}
	}
}
</style>