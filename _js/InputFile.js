export class InputFile{
    removeIcon           = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
    collectionImageIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>`
    collectionMusicIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/></svg>`
    collectionOtherIcon  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>>`
    collectionPdfIcon    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/></svg>`
    collectionVideoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2rem" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>`

    static inputFileBase64(){
        // "application/pdf","image/jpeg","image/png"
        $(this).siblings("label").css({borderColor:'#00000020'})
        $(this).siblings(".mensageInput").text("").hide()

        let sizeMegabyte = $(this).data("size-file")         //? tamanho em megabyte permitido.
        let formatFile   = this.files[0].type                //? Formato do arquivo.
        let sizeMax      = sizeMegabyte * Math.pow(1024,2)   //? Convete o tamanho em megabyte em byte.
        let sizeByte     = this.files[0].size                //? Tamanho do arquivo.
        let nameFile     = this.files[0].name                //? Nome do arquivo
        let fileIcon     = ""                                //? Icone do arquivo
        let quantity     = $(this).data("quantity")          //? quantidade de arquivo permitido
        let formato      = $(this).attr("accept").split(",") //? formatos aceito
                
        switch(formatFile){
            case "application/pdf":
                fileIcon = InputFile.collectionPdfIcon
                break
            case "image/jpeg":
            case "image/jpg":
            case "image/png":
            case "image/gif":
                fileIcon = InputFile.collectionImageIcon
                break
            default:
                fileIcon = InputFile.collectionOtherIcon
        }

        if(!formato.includes(formatFile.substr(formatFile.indexOf("/")).replace("/","."))){
            $(this).siblings("label").css({borderColor:'red'})
            $(this).siblings(".mensageInput").text("FORMATO NÃO PERMITIDO").show()
        }else if(sizeMax < sizeByte){
            $(this).siblings("label").css({borderColor:'red'})
            $(this).siblings(".mensageInput").text(`Tamanho permitido de ${sizeMegabyte}MB`).show()
        }else{
            let converter = new FileReader()

            converter.readAsDataURL(this.files[0]) //base64
            // converter.readAsBinaryString(this.files[0]) //binario

            converter.onloadend = ()=>{
                let fileLoad = `<label>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fileLabel" viewBox="0 0 24 24" width="1rem" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                                    ${fileIcon}
                                    ${nameFile}
                                    <input type="hidden" name="nmFileBase64[]" class="fileBase64" value="['${formatFile}','${nameFile}','${converter.result}']">
                                </label>`
                $(this).siblings(".listFileUp").append(fileLoad)
                $(".fileLabel").on({click:InputFile.deleteFile})

                if(quantity <= $(this).siblings(".listFileUp").find("label").length){
                    $(this).attr("disabled","true")
                    $(this).siblings("label").hide()
                }else{
                    $(this).removeAttr("disabled")
                    $(this).siblings("label").show()
                }

            }
        }
    }

    static deleteFile(){
        let quantity      = $(this).closest(".fileBlock").find("input[type=file]").data("quantity")
        let quantityLabel = $(this).siblings("label").length - 1
        
        if(quantity <= quantityLabel){
            $(this).closest(".fileBlock").find("input[type=file]").attr("disabled","true")
            $(this).closest(".fileBlock").find("label").hide()
            $(this).siblings(".listFileUp").css({"margin":"0"})
        }else{
            $(this).closest(".fileBlock").find("input[type=file]").removeAttr("disabled")
            $(this).closest(".fileBlock").find("label").show()
            $(this).siblings(".listFileUp").css({"marginTop":"1rem"})
        }

        $(this).closest("label").remove()
    }

}