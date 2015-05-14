// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html()); // var homeTpl = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html()); // var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

    var service = new EmployeeService();
    service.initialize().done(function () {
        $('body').html(new HomeView(service).render().$el);
    });

    /* --------------------------------- Event Registration -------------------------------- */

    document.addEventListener('deviceready', function () {

      StatusBar.overlaysWebView( false );
      StatusBar.backgroundColorByHexString('#ffffff');
      StatusBar.styleDefault();

      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }

      FastClick.attach(document.body);

    }, false);


    /* ---------------------------------- Local Functions ---------------------------------- */

    // REMOVE ME
    /* 
    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            $('.content').html(employeeListTpl(employees));
            }
        );
    } */


    // REMOVE ME
    /* function renderHomeView() {
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
    } */ 

}());