<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>README.md</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
    <div id="readme"></div>
    <script>
        fetch('README.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('readme').innerHTML = marked.parse(text);
            });
    </script>
</body>
</html>
