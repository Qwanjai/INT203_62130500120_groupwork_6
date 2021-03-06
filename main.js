const constraints = {
	firstname: {
		presence: true,
	},
	lastname: {
		presence: true,
	},
	username: {
		presence: true,
	},
	email: {
		presence: true,
		email: true,
	},
	phone: {
		presence: true,
		length: {
			minimum: 10,
			message: "must be at least 10 digits",
		},
	},
};

const app = Vue.createApp({
	data() {
		return {
			email: null,
			firstname: null,
			lastname: null,
			username: null,
			phone: null,
			errors: null,
		};
	},
	methods: {
		checkForm(e) {
			this.errors = validate(
				{
					email: this.email,
					firstname: this.firstname,
					lastname: this.lastname,
					username: this.username,
					phone: this.phone,
				},
				constraints
			);
			if (this.errors) {
				e.preventDefault();
				// alert("Hello! I am an alert box!!");
			}
			if (!this.errors) {
				alert("Your profile is updated successfully.");
			}
		},
	},
});
// Vue.createApp(app).mount('#app')
// mountedApp = Vue.createApp(app).mount("#app");

app.mount("#app");
