<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <section>
            <p id="choice">여기에 일시를 표시한다</p>
        </section>
        <script>
            document.getElementById('choice').textContent=new Date();
            console.log(document.getElementById('choice').textContent);
        </script>
    </body>
</html>