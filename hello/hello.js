$(document).ready(function() {
    $.ajax({
        url: "https://wildcard.corstest.apps.cfh-test.sandbox1479.opentlc.com/greeting"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});
