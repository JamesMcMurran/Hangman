<?php
$mysqli = new mysqli("localhost", "codeForGood", "2JMSeY8nLbFNLfMT", "guestBook");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
