var HomeView = function(service) {

	/*
	HomeView uses a nested view to display the list of employees.
	Defining the list of employees as a separate view makes it reusable in other contexts.
	We will define EmployeeListView in Step 2 below.
	For now, define a local variable to keep track of the nested view.
	*/

	var employeeListView;

	this.initialize = function () {

		// Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView = new EmployeeListView();
        this.render();
	}

	this.render = function() {
		this.$el.html(this.template());
		$('.content', this.$el).html(employeeListView.$el);

		return this;
	};

	this.findByName = function() {
		service.findByName($('.search-key').val()).done(function(employees) {
			employeeListView.setEmployees(employees);
		});
	};


	this.initialize();

}