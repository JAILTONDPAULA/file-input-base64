//icons
var removeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
var collectionImageIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>`
var collectionMusicIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/></svg>`
var collectionOtherIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>>`
var collectionPdfIcon    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/></svg>`
var collectionVideoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>`
//  ======================  //
// * converter em base 64 * //
//  ======================  //
$("input[type=file").on({input:inputFileBase64})
function inputFileBase64(){
    // "application/pdf","image/jpeg","image/png"
    
    $(this).closest(".fileBlock").find("label").eq(0).css({borderColor:'#00000020'})
    let sizeMegabyte = 10                               //? tamanho em megabyte permitido.
    let formatFile   = this.files[0].type               //? Formato do arquivo.
    let sizeMax      = sizeMegabyte * Math.pow(1024,2)  //? Convete o tamanho em megabyte em byte.
    let sizeByte     = this.files[0].size               //? Tamanho do arquivo.
    let nameFile     = this.files[0].name               //? Nome do arquivo
    let fileIcon     = ""                               //? Icone do arquivo
    let quantity     = $(this).data("quantity")         //? quantidade de arquivo permitido
    
    switch(formatFile){
        case "application/pdf":
            fileIcon = collectionPdfIcon
            break
        case "image/jpeg":
        case "image/jpg":
        case "image/png":
        case "image/gif":
            fileIcon = collectionImageIcon
            break
        default:
            fileIcon = collectionOtherIcon
    }

    if(!["image/jpeg","image/png","application/pdf"].includes(formatFile)){
        $(this).closest(".fileBlock").find("label").eq(0).css({borderColor:'red'})
        alert('Formato não permitido') //personalize aqui
    }else if(sizeMax < sizeByte){
        $(this).closest(".fileBlock").find("label").eq(0).css({borderColor:'red'})
        alert(`Tamanho permitido de apenas ${sizeMegabyte}MB`) //personalize aqui
    }else{
        let converter = new FileReader()

        converter.readAsDataURL(this.files[0])

        converter.onloadend = ()=>{
            fileLoad = `<label>
                            <svg xmlns="http://www.w3.org/2000/svg" class="fileLabel" viewBox="0 0 24 24" width="1rem" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                            ${fileIcon}
                            ${nameFile}
                            <input type="hidden" name="nmFileBase64Name" value="${nameFile}">
                            <input type="hidden" name="nmFileBase64"     value="${converter.result}">
                        </label>`
            $(this).closest(".fileBlock").find(".listFileUp").append(fileLoad)
            $(".fileLabel").on({click:deleteFile})

            if(quantity <= $(this).siblings(".listFileUp").find("label").length){
                $(this).attr("disabled","true")
                $(this).siblings("label").css({opacity:"0.2"})
            }else{
                $(this).removeAttr("disabled")
                $(this).siblings("label").css({opacity:"1"})
            }

        }
    }
}
// ================== //
// * Apagar arquivo * //
// ================== //
function deleteFile(){
    let quantity      = $(this).closest(".fileBlock").find("input[type=file]").data("quantity")
    let quantityLabel = $(this).closest(".fileBlock").siblings(".listFileUp").find("label").length - 1
    
    if(quantity <= quantityLabel){
        $(this).closest(".fileBlock").find("input[type=file]").attr("disabled","true")
        $(this).closest(".fileBlock").find("label").css({opacity:"0.2"})
    }else{
        $(this).closest(".fileBlock").find("input[type=file]").removeAttr("disabled")
        $(this).closest(".fileBlock").find("label").css({opacity:"1"})
    }

    $(this).closest("label").remove()
}

