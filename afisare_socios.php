<?php
$host     = "localhost";
$user     = "root";
$password = "";
$database = "realmadrid_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Eroare conexiune: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");

$sql = "SELECT id, nume_complet, document_id, data_nasterii, email_socio, calitate, sector, jucator_favorit, motivatie
        FROM socios
        ORDER BY id DESC";

$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Socios</title>
    <link rel="stylesheet" href="socios.css">
    <style>
        body {
            padding: 30px;
        }

        .container-tabel {
            max-width: 1400px;
            margin: 50px auto;
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid rgba(0, 240, 255, 0.3);
            border-radius: 30px;
            padding: 30px;
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.2);
            overflow-x: auto;
        }

        h1 {
            text-align: center;
            font-family: 'Cinzel', serif;
            color: #ffcf00;
            margin-bottom: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            color: white;
            min-width: 1100px;
        }

        th, td {
            border: 1px solid rgba(0, 240, 255, 0.2);
            padding: 12px;
            text-align: left;
            vertical-align: top;
        }

        th {
            background: rgba(0, 240, 255, 0.15);
            color: #00f0ff;
            font-family: 'Cinzel', serif;
        }

        tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.03);
        }

        tr:hover {
            background: rgba(255, 207, 0, 0.08);
        }

        .btn-back {
            display: inline-block;
            margin-top: 25px;
            padding: 14px 30px;
            background: linear-gradient(45deg, #00f0ff, #ffcf00);
            color: #020617;
            text-decoration: none;
            border-radius: 40px;
            font-weight: bold;
            font-family: 'Cinzel', serif;
        }

        .gol {
            text-align: center;
            color: #cbd5e1;
            font-size: 1.2rem;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="container-tabel">
    <h1>Lista Cererilor Socios</h1>

    <?php if ($result && $result->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Nume complet</th>
                <th>Document ID</th>
                <th>Data nașterii</th>
                <th>Email</th>
                <th>Calitate</th>
                <th>Sector</th>
                <th>Jucător favorit</th>
                <th>Motivație</th>
            </tr>

            <?php while($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['id']); ?></td>
                    <td><?php echo htmlspecialchars($row['nume_complet']); ?></td>
                    <td><?php echo htmlspecialchars($row['document_id']); ?></td>
                    <td><?php echo htmlspecialchars($row['data_nasterii']); ?></td>
                    <td><?php echo htmlspecialchars($row['email_socio']); ?></td>
                    <td><?php echo htmlspecialchars($row['calitate']); ?></td>
                    <td><?php echo htmlspecialchars($row['sector']); ?></td>
                    <td><?php echo htmlspecialchars($row['jucator_favorit']); ?></td>
                    <td><?php echo htmlspecialchars($row['motivatie']); ?></td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p class="gol">Nu există încă înregistrări în baza de date.</p>
    <?php endif; ?>

    <a href="socios.html" class="btn-back">← Înapoi la formular</a>
</div>

</body>
</html>

<?php
$conn->close();
?>