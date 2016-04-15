<script type="text/javascript">
    var intervalId = 0;
    intervalId = setInterval(myFunc, 3000);

function myFunc(){
 $("#pid1").text("bla")
}
</script>
------------------------------------------------------------
<script type="text/javascript">
    function crunchifyAjax() {
        $.ajax({
            url : 'ajaxtest.html',
            success : function(data) {
                $('#result').html(data);
            }
        });
    }
</script>
 
<script type="text/javascript">
    var intervalId = 0;
    intervalId = setInterval(crunchifyAjax, 3000);
</script>
