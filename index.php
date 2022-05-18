<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input File Base64</title>
    <link rel="stylesheet" href="_css/custom.min.css">
</head>
<body>
    <form>
        <section class="fileBlock">
            <input type="file" accept=".png,.jpeg,.pdf,.jpg" id="fileUpdate" style="display:none;" data-quantity="2" data-size-file="1">
            <label for="fileUpdate" class="buttonUploadFile">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="1.3rem" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/></svg>
                &nbsp;
                <span>UPLOAD FILE<span>
            </label>
            <p class="mensageInput">fdsfdsfs</p>
            <div class="listFileUp"></div>
        </section>
    </form>
</body>
<script src="_js/jQuery_v3.5.1.js"></script>
<script src="_js/app.js" type="module"></script>
</html>