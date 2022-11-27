$(document).ready(function(){

    $('#form').submit(function() {
        sendPing();
        return true;
    });

    function sendPing() {
        let cmd = ["ping","-c","1", $('#address').val()].join(" ");
        $('#cmd').val(cmd);
    }
});