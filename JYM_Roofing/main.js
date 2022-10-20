// This adds and removes a class so that the side menu appears and disapears when clicked

jQuery(document).ready(function () {
    jQuery(".burger-menu").on("click",function(){
        jQuery(".nav-wrapper").toggleClass("show");
    });
    jQuery(".btn-x").on("click",function(){
        jQuery(".nav-wrapper").toggleClass("show");
    });
});

