<?php
$mysqli = new mysqli("localhost", "codeForGood", "ZpAv3aFDtLh7zJ9j", "guestBook");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>