<?php
$servername = "localhost";
$username = "root";
$password = "Password";
$dbname = "SoupOrders";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM orders ORDER BY order_date DESC";
$result = $conn->query($sql);

$orders = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
}

echo json_encode($orders);

$conn->close();
?>
