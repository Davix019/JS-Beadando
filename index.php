<?php

session_start();

if (isset($_SESSION["user_id"]))
{
    $mysqli = require __DIR__ . "/connect.php";

    $sql = "SELECT * FROM users
            WHERE id = {$_SESSION["user_id"]}";

    $result = $mysqli->query($sql);

    $user = $result->fetch_assoc();


}

?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>

    <div id="reg">Home</div>

    <?php if (isset($user)): ?>

        <p>Hello <?= htmlspecialchars($user["userName"]) ?></p>

        <p><a href="logout.php">Log out</a></p>

    <?php else: ?>

        <p><a href="login.php">Log in</a> or <a href="reg.php">sign up</a></p>

    <?php endif; ?>

</body>
</html>