window.onload = function () {
    $("[data-name=planning]")[0].onclick = function() {
        w = window.open('https://client.loginextsolutions.com/TrackAPack/MasterController?userid=serviceadmin&password=admin&controllerName=LoginController&controllerMethodName=userVerificationProcessRequest&browser=Chrome,46.0.2490.86@remember=me', '_blank'); 
        window.setTimeout(function(){
            w.close()
            window.location = 'https://client.loginextsolutions.com/TrackAPack/MasterController'
        }, 3000)
    }
}
